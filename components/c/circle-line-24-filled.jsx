import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s0pk4xq1d {
  fill: currentColor;
  d: path("M21.972 12.75H2.027C2.411 17.922 6.73 22 12 22s9.588-4.078 9.972-9.25m0-1.5H2.027C2.411 6.077 6.73 2 12 2s9.588 4.077 9.972 9.25");
}
</style><path class="s0pk4xq1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-line-24-filled"} {...others} />);
}

export default Component;
