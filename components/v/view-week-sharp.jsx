import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.igiik9b-m {
  fill: currentColor;
  d: path("M3 19V5h5.325v14zm6.33 0V5h5.345v14zm6.345 0V5H21v14z");
}
</style><path class="igiik9b-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-week-sharp"} {...others} />);
}

export default Component;
