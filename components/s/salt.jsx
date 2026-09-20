import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.ftru-3bnv {
  d: path("m12 8.525l4.966 9.992H7.037zM12 3L3.31 21h17.38z");
}

.i102b6g5h {
  stop-color: var(--svg-color--687883, #687883);
}

.qg0r_bc9v {
  stop-color: var(--svg-color--17babc, #17babc);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVG57HQvccX)" class="ftru-3bnv"/><defs><linearGradient id="SVG57HQvccX" x1="8.422" x2="20.69" y1="12" y2="21" gradientUnits="userSpaceOnUse"><stop class="qg0r_bc9v"/><stop offset="1" class="i102b6g5h"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:salt"} {...others} />);
}

export default Component;
