import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.eroscum8r {
  fill: currentColor;
  d: path("m232.49 112.49l-48 48a12 12 0 0 1-17-17L195 116h-67a84.09 84.09 0 0 0-84 84a12 12 0 0 1-24 0A108.12 108.12 0 0 1 128 92h67l-27.49-27.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01");
}
</style><path class="eroscum8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-bend-up-right-bold"} {...others} />);
}

export default Component;
