import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wegcynbbs {
  fill: currentColor;
  d: path("M2 19V5l5.02.827v12.346zm7.404-.865V5.845h5.192v12.289zM22 19l-5.02-.827V5.827L22 5zM3 17.798l3.02-.479V6.662L3 6.177zm7.404-.663h3.192V6.846h-3.192zM21 17.823V6.177l-3.02.485v10.657zm-18-.025V6.177l3.02.485v10.657zm7.404-.663V6.846h3.192v10.289zM21 17.823l-3.02-.504V6.662L21 6.177z");
}
</style><path class="wegcynbbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-apps-sharp"} {...others} />);
}

export default Component;
