import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cissbibjv {
  fill: currentColor;
  d: path("M4 14.346V9h12V7.371l5.848-1.975l.318.939L17 8.07v6.275zm1-1h11V10H5zM10 20v-2.884H3v-1h8V20zm3 0v-3.884h8v1h-7V20zm-2.5-8.327");
}
</style><path class="cissbibjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:skillet-cooktop-outline-sharp"} {...others} />);
}

export default Component;
