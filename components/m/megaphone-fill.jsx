import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.hvlr5fbtg {
  fill: currentColor;
  d: path("M200 72h-39.8c-2.91-.17-53.62-3.74-101.91-44.24A16 16 0 0 0 32 40v160a16 16 0 0 0 26.29 12.25c37.77-31.68 77-40.76 93.71-43.3v31.72a16 16 0 0 0 7.12 13.33l11 7.33A16 16 0 0 0 194.5 212l11.77-44.36A48 48 0 0 0 200 72m-21 135.89v.11l-11-7.33V168h21.6ZM200 152h-32V88h32a32 32 0 1 1 0 64");
}
</style><path class="hvlr5fbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:megaphone-fill"} {...others} />);
}

export default Component;
