import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.nckgicb_c {
  fill: var(--svg-color--24aae1, #24aae1);
  d: path("M19.313 3H12l-7.312 9H12z");
}

.pyb-dybxv {
  fill: var(--svg-color--000, #000);
  d: path("M19.313 12H12l-7.312 9H12z");
}
</style><g class="ft5dv1b6b"><path class="nckgicb_c"/><path class="pyb-dybxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:stpt"} {...others} />);
}

export default Component;
