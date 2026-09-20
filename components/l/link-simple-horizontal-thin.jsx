import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.af_rw2b8h {
  fill: currentColor;
  d: path("M80 124h96a4 4 0 0 1 0 8H80a4 4 0 0 1 0-8m24 48H64a44 44 0 0 1 0-88h40a4 4 0 0 0 0-8H64a52 52 0 0 0 0 104h40a4 4 0 0 0 0-8m88-96h-40a4 4 0 0 0 0 8h40a44 44 0 0 1 0 88h-40a4 4 0 0 0 0 8h40a52 52 0 0 0 0-104");
}
</style><path class="af_rw2b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:link-simple-horizontal-thin"} {...others} />);
}

export default Component;
