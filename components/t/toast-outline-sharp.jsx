import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zxs5cdm3x {
  fill: currentColor;
  d: path("M6.5 17.5h11v-1h-11zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="zxs5cdm3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:toast-outline-sharp"} {...others} />);
}

export default Component;
