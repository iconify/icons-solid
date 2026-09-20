import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qhzn6vd_z {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10v7.75A2.25 2.25 0 0 1 19.75 22H12C6.477 22 2 17.523 2 12m10-8.5a8.5 8.5 0 0 0 0 17h7.75a.75.75 0 0 0 .75-.75V12A8.5 8.5 0 0 0 12 3.5");
}
</style><path class="qhzn6vd_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:teardrop-bottom-right-24-regular"} {...others} />);
}

export default Component;
