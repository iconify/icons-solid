import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rq6sudv-m {
  fill: currentColor;
  d: path("M5 15V9h4l5-5v16l-5-5zm11 1V7.95q1.125.525 1.813 1.625T18.5 12t-.687 2.4T16 16m-4-7.15L9.85 11H7v2h2.85L12 15.15zM9.5 12");
}
</style><path class="rq6sudv-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:volume-down-outline-sharp"} {...others} />);
}

export default Component;
