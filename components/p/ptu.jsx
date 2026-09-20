import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.i4ly6mbjt {
  stop-color: var(--svg-color--0a68f4, #0a68f4);
}

.ipenwjb2m {
  stop-color: var(--svg-color--3dffb9, #3dffb9);
}

.yh2n7rb_d {
  d: path("M14.669 3H9.33a4.84 4.84 0 0 0-4.78 4.903V21h3.104V7.903c0-1.117.577-1.8 1.676-1.8h5.338c1.098 0 1.676.677 1.676 1.8V21h3.103V7.903A4.84 4.84 0 0 0 14.668 3");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGcoyI3day)" class="yh2n7rb_d"/><defs><linearGradient id="SVGcoyI3day" x1="6.383" x2="21.037" y1="9.468" y2="17.673" gradientUnits="userSpaceOnUse"><stop class="i4ly6mbjt"/><stop offset="1" class="ipenwjb2m"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ptu"} {...others} />);
}

export default Component;
