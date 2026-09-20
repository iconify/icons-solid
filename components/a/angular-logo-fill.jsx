import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ma-hpechb {
  fill: currentColor;
  d: path("M128 104.47L141.07 128h-26.14Zm103.93-31.41l-16 120a8 8 0 0 1-4.35 6.1l-80 40a8 8 0 0 1-7.16 0l-80-40a8 8 0 0 1-4.35-6.1l-16-120a8 8 0 0 1 4.85-8.44l96-40a7.93 7.93 0 0 1 6.16 0l96 40a8 8 0 0 1 4.85 8.44M175 156.12l-40-72a8 8 0 0 0-14 0l-40 72a8 8 0 1 0 14 7.76L106 144h44l11 19.88a8 8 0 1 0 14-7.76");
}
</style><path class="ma-hpechb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:angular-logo-fill"} {...others} />);
}

export default Component;
