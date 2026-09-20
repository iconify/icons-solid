import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nfu7lgbgr {
  fill: currentColor;
  d: path("M17.385 14.727v-5.42H13v1.055l.885.865v-1.035H16.5v3.65zm-10.77-.035H7.5v-2h2.616v2H11v-3.5l-.885-.884v1.5H7.5v-2.5h-.885zM21 18.342L7.658 5H21zM3 19V5h1.808l9.692 9.692h-1.415L2.36 3.97l.708-.707l17.15 17.15l-.707.707L17.38 19z");
}
</style><path class="nfu7lgbgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:high-quality-off-sharp"} {...others} />);
}

export default Component;
