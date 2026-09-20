import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ps0ysubnw {
  fill: currentColor;
  d: path("M240 88v64a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h44.6l-22.36-22.21A88 88 0 0 0 40 184a8 8 0 0 1-16 0a104 104 0 0 1 177.54-73.54L224 132.77V88a8 8 0 0 1 16 0");
}
</style><path class="ps0ysubnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-arc-right"} {...others} />);
}

export default Component;
