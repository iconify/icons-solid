import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gm5ziw0_v {
  d: path("M16.75 21.5v-3a1.25 1.25 0 0 1 2.5 0v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnwr0o5ri {
  d: path("M11.9 21.5H4v-19h12.5v10.1m-3-.6h.01m1.24 9.5v-3a3.25 3.25 0 0 1 6.5 0v3");
}
</style><g class="ulnmmdpxh"><path class="vnwr0o5ri"/><path class="gm5ziw0_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:security-fingerprint-door"} {...others} />);
}

export default Component;
