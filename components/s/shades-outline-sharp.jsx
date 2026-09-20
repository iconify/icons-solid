import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qjr5--bar {
  fill: currentColor;
  d: path("M3 22V4H2V2h20v2h-1v18q-2.35 0-4.212-1.375T14.275 17H9.7q-.675 2.25-2.525 3.625T3 22m2-2.4q1.35-.6 2.175-1.85T8 15V4H5zm5-4.6h4V4h-4zm9 4.6V4h-3v11q0 1.5.8 2.763T19 19.6M8 4H5zm11 0h-3z");
}
</style><path class="qjr5--bar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shades-outline-sharp"} {...others} />);
}

export default Component;
