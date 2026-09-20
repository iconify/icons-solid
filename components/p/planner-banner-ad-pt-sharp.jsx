import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uimgwkbpu {
  fill: currentColor;
  d: path("M4 22V2h16v20zm3-4h10l-3.45-4.5l-2.3 3l-1.55-2z");
}
</style><path class="uimgwkbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:planner-banner-ad-pt-sharp"} {...others} />);
}

export default Component;
