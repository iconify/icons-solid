import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blgo49tzr {
  fill: var(--svg-color--172683, #172683);
  d: path("M7.08 16.135a.756.756 0 0 1 0-1.07l4.386-4.386a.754.754 0 0 1 1.07 0l4.386 4.386a.76.76 0 0 1 0 1.07l-4.387 4.387a.76.76 0 0 1-1.07 0z");
}

.ft5dv1b6b {
  fill: none;
}

.idkde_bzl {
  fill: var(--svg-color--00dd9a, #00dd9a);
  d: path("M20.773 12.402a.72.72 0 0 0 0-1.049l-8.228-7.878a.8.8 0 0 0-1.095 0l-8.223 7.878a.72.72 0 0 0 0 1.05l1.183 1.13a.8.8 0 0 0 1.095 0l5.945-5.697a.8.8 0 0 1 1.1 0l5.955 5.687a.79.79 0 0 0 1.096 0z");
}
</style><g class="ft5dv1b6b"><path class="idkde_bzl"/><path class="blgo49tzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:nord"} {...others} />);
}

export default Component;
