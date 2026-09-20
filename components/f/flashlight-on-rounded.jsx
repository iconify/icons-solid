import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qr04ebc9d {
  fill: currentColor;
  d: path("M7 5.5v-.885q0-.666.475-1.14T8.615 3h6.77q.666 0 1.14.475T17 4.615V5.5zm5.707 9.209q.293-.291.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293t.709-.291M9 19.385v-8.693L7.267 8.096q-.136-.211-.202-.43Q7 7.446 7 7.208V6.5h10v.708q0 .238-.065.457q-.066.22-.202.431L15 10.692v8.693q0 .666-.475 1.14t-1.14.475h-2.77q-.666 0-1.14-.475T9 19.386");
}
</style><path class="qr04ebc9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:flashlight-on-rounded"} {...others} />);
}

export default Component;
