import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q51fxnbks {
  fill: currentColor;
  d: path("M3 21v-1h12.462v1zm0-3.384v-1h4.23v-1.154h4v1.154h4.232v1zM18.385 21v-6.215q-.708-.64-1.2-1.535q-.493-.894-.493-2.03V3H21v8.22q0 1.136-.451 2.033t-1.164 1.532V20H21v1zm-.693-12.615H20V4h-2.308zm1.192 5.434q.45-.352.783-1.075T20 11.22V9.385h-2.308v1.834q0 .802.366 1.525q.365.723.827 1.075m-.039 0");
}
</style><path class="q51fxnbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:brunch-dining-outline-sharp"} {...others} />);
}

export default Component;
