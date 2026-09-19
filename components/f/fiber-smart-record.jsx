import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h0bn7_biy {
  fill: currentColor;
  d: path("M17 4.26v2.09a5.99 5.99 0 0 1 0 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74");
}

.z59go1_xr {
  cx: 9px;
  cy: 12px;
  r: 8px;
  fill: currentColor;
}
</style><circle class="z59go1_xr"/><path class="h0bn7_biy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:fiber-smart-record"} {...others} />);
}

export default Component;
