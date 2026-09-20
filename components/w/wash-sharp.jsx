import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cli-w1bbr {
  fill: currentColor;
  d: path("M19 22H2V10.975l9.625-6.25L13.25 6.35L11.3 9.5H20v2h-8V13h10v2H12v1.5h9v2h-9V20h7zM15.763 7.238Q15 6.475 15 5.5q0-.875.575-1.937T17.5 1q1.35 1.5 1.925 2.563T20 5.5q0 .975-.763 1.738T17.5 8t-1.737-.763");
}
</style><path class="cli-w1bbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wash-sharp"} {...others} />);
}

export default Component;
