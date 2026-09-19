import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w54s7hbvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v7.008m-4.485-2.803L24 12.506l4.485-2.802M9.704 19.515h28.591m-28.591 8.97h28.591M24 42.5v-7.008m-4.485 2.803L24 35.493l4.485 2.804");
}
</style><path class="w54s7hbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:compressor"} {...others} />);
}

export default Component;
