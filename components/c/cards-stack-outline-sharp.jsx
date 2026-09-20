import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mvxocipwf {
  fill: currentColor;
  d: path("M10.308 8.5h7v-1h-7zm0 3.154h4v-1h-4zm6.479 5.904h2.219l.057.715l-14.8 1.88L2.731 9.12l1.052-.129l1.351 10.048zM6.616 15.196V4H21v11.196zm1-1H20V5H7.616zm0 0V5zm-2.481 4.842");
}
</style><path class="mvxocipwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:cards-stack-outline-sharp"} {...others} />);
}

export default Component;
