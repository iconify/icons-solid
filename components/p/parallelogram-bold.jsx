import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b23t9yb4z {
  fill: currentColor;
  d: path("M248.78 45.14A19.92 19.92 0 0 0 232 36H88.81a20 20 0 0 0-18.24 11.79l-64.8 144A20 20 0 0 0 24 220h143.19a20 20 0 0 0 18.24-11.79l64.8-144a19.9 19.9 0 0 0-1.45-19.07M164.6 196H30.2L91.4 60h134.4Z");
}
</style><path class="b23t9yb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:parallelogram-bold"} {...others} />);
}

export default Component;
