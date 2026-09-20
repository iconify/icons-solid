import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dcfk_8_lw {
  fill: currentColor;
  d: path("M212 232a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12M76 184V40a20 20 0 0 1 20-20h64a20 20 0 0 1 20 20v144a20 20 0 0 1-20 20H96a20 20 0 0 1-20-20m24-4h56V44h-56Z");
}
</style><path class="dcfk_8_lw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-bottom-simple-bold"} {...others} />);
}

export default Component;
