import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.kgrc1pmoh {
  d: path("M21 10L12 2.9963L3 10L3 21L21 21Z");
}

.w-ei11smt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11.3857 2.2071C11.7469 1.92603 12.2531 1.92603 12.6143 2.2071L21.6143 9.21101C21.8575 9.40048 22 9.6917 22 10.0001V21.0001C21.9998 21.5522 21.5522 22.0001 21 22.0001H3C2.44783 22.0001 2.00018 21.5522 2 21.0001V10.0001C2 9.6917 2.14246 9.40048 2.38574 9.21101L11.3857 2.2071Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="w-ei11smt"/><path class="kgrc1pmoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:home-simple-sharp-two-tone"} {...others} />);
}

export default Component;
