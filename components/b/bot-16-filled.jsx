import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.uz69rib-k {
  fill: currentColor;
  d: path("M8 1a.5.5 0 0 1 .5.5V2h2A1.5 1.5 0 0 1 12 3.5v3A1.5 1.5 0 0 1 10.5 8h-5A1.5 1.5 0 0 1 4 6.5v-3A1.5 1.5 0 0 1 5.5 2h2v-.5A.5.5 0 0 1 8 1M4.5 9.5A1.5 1.5 0 0 0 3 11v.35c0 1.305.6 2.25 1.554 2.843C5.479 14.768 6.71 15 8 15c1.297 0 2.528-.231 3.452-.807C12.406 13.6 13 12.653 13 11.35V11a1.5 1.5 0 0 0-1.5-1.5zm2-3.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M10.25 5a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0");
}
</style><path class="uz69rib-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:bot-16-filled"} {...others} />);
}

export default Component;
