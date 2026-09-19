import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ujk1twj5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.5 19.5l9 9m0-9l-9 9m0-23l9 9m0-9l-9 9m0 19l9 9m0-9l-9 9m-4.218-24.864v7.343c0 5.386 1.56 7 7 7c4.176 0 10.436 0 10.436-4.25m0 4.25V17.636");
}
</style><path class="ujk1twj5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mijnuva"} {...others} />);
}

export default Component;
