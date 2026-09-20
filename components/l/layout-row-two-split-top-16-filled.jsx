import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.aasgs5bdw {
  fill: currentColor;
  d: path("M7.5 7.5V2h-3A2.5 2.5 0 0 0 2 4.5v3zm1 0H14v-3A2.5 2.5 0 0 0 11.5 2h-3zm5.5 1H2v3A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5z");
}
</style><path class="aasgs5bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-two-split-top-16-filled"} {...others} />);
}

export default Component;
