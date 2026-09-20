import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.yrj42z84s {
  fill: currentColor;
  d: path("M26 14c0 6.627-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2s12 5.373 12 12m-12.22 5.03a.75.75 0 0 0 0-1.06l-3.22-3.22h8.69a.75.75 0 0 0 0-1.5h-8.69l3.22-3.22a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06 0");
}
</style><path class="yrj42z84s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-circle-left-28-filled"} {...others} />);
}

export default Component;
