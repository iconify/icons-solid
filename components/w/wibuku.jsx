import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tibv-mb0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 10.145l10.88 27.454l3.967-9.312l-5.856-14.494zm39 .256L32.62 37.855l-3.967-9.311l5.856-14.495zm-23.854 8.223l4.277 10.612l4.027-10.544l-4.027 1.697z");
}
</style><path class="tibv-mb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wibuku"} {...others} />);
}

export default Component;
