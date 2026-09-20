import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pu8ytab0z {
  fill: currentColor;
  d: path("M11 20.596V13H3.404l8-8H19v7.596zm4.5-5.921l2.5-2.5V6h-6.175l-2.5 2.5H15.5zm-3.5 3.5l2.5-2.5V9.5H8.325l-2.5 2.5H12z");
}
</style><path class="pu8ytab0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:azm-outline-sharp"} {...others} />);
}

export default Component;
