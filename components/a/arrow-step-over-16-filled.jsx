import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.t64c-cbnv {
  fill: currentColor;
  d: path("M10.147 2.146a.5.5 0 0 0 0 .708L12.293 5H9.957c-1.468 0-2.905 0-4.226.396c-1.365.41-2.585 1.234-3.647 2.827a.5.5 0 0 0 .832.554C3.854 7.37 4.884 6.694 6.02 6.354C7.185 6.004 8.483 6 10 6h2.293l-2.146 2.146a.5.5 0 1 0 .707.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.707 0M8 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="t64c-cbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-step-over-16-filled"} {...others} />);
}

export default Component;
