import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bv_x3jbnr {
  fill: currentColor;
  d: path("M11 18.846V13H8.385V3h7.288L14 8.789h3.904z");
}
</style><path class="bv_x3jbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:flash-on"} {...others} />);
}

export default Component;
