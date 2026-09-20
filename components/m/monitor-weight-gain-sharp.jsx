import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rh-uq1b4l {
  fill: currentColor;
  d: path("M18 23v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-3.875-11.875Q15 10.25 15 9t-.875-2.125T12 6t-2.125.875T9 9t.875 2.125T12 12t2.125-.875M3 21V3h18v10.35q-.5-.175-1-.262T19 13q-2.5 0-4.25 1.75T13 19q0 .5.088 1t.262 1zm7-11.5v-1h1v1zm1.5 0v-1h1v1zm1.5 0v-1h1v1z");
}
</style><path class="rh-uq1b4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:monitor-weight-gain-sharp"} {...others} />);
}

export default Component;
