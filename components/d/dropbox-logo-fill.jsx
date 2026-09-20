import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.izt5tzl7o {
  fill: currentColor;
  d: path("m188 120l-60-40l55.56-37a8 8 0 0 1 8.88 0L238 73.34a8 8 0 0 1 0 13.32ZM72.44 43a8 8 0 0 0-8.88 0L18 73.34a8 8 0 0 0 0 13.32L68 120l60-40ZM238 153.34L188 120l-60 40l55.56 37a8 8 0 0 0 8.88 0L238 166.66a8 8 0 0 0 0-13.32m-220 0a8 8 0 0 0 0 13.32L63.56 197a8 8 0 0 0 8.88 0L128 160l-60-40Zm150.61 52.95l-38.37-25.58a4 4 0 0 0-4.44 0l-38.39 25.58a4 4 0 0 0 0 6.65L123.56 237a8 8 0 0 0 8.88 0l36.15-24.1a4 4 0 0 0 0-6.61Z");
}
</style><path class="izt5tzl7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dropbox-logo-fill"} {...others} />);
}

export default Component;
