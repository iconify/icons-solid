import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cieqqnjqe {
  fill: currentColor;
  d: path("M8 19v-8.5h6V8H8V5h9v8.5h-6V16h6v3z");
}
</style><path class="cieqqnjqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:timer-2-sharp"} {...others} />);
}

export default Component;
