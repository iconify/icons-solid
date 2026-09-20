import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":197};
const content = `<style>.tjy4k5inb {
  d: path("m193.065 138.495l-53.333 58.428H41.599L94.4 138.495zM256 69.248l-53.305 58.427H0l53.305-58.427zM214.399 0l-53.087 58.428h-98.38L116.1 0z");
}
</style><path class="tjy4k5inb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:stenciljs-icon"} {...others} />);
}

export default Component;
