import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h47hzxbpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.125 2.5h1.75A2.625 2.625 0 0 1 15.5 5.125v1.75A2.625 2.625 0 0 1 12.875 9.5h-1.75A2.625 2.625 0 0 1 8.5 6.875v-1.75A2.625 2.625 0 0 1 11.125 2.5M12 12v2.75m-2-2l2 2l2-2M6.805 17.5h11.89a1.06 1.06 0 0 1 .805 1.75l-.976 1.139a1.75 1.75 0 0 1-1.329.611H5.305a1.06 1.06 0 0 1-.805-1.75l.976-1.139a1.75 1.75 0 0 1 1.329-.611");
}
</style><path class="h47hzxbpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:snap-to-surface"} {...others} />);
}

export default Component;
