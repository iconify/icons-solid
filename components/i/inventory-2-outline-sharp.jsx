import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wnid8ibgp {
  fill: currentColor;
  d: path("M4 21V8.385H3V3h18v5.385h-1V21zm1-1h14V8.385H5zM4 7.385h16V4H4zm5.385 5.48h5.23V12h-5.23zM12 14.193");
}
</style><path class="wnid8ibgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:inventory-2-outline-sharp"} {...others} />);
}

export default Component;
