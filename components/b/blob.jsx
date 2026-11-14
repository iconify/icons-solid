import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itpv7ci8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c3 0 7 4 8 6s0 7.25-1.5 8s-3.5 4-5.5 4s-5.5-1-7-2.5s-3-4.5-3-7s3-3 4.5-4.5S9 3 12 3m-1 9.5h.01");
}
</style><path class="itpv7ci8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blob"} {...others} />);
}

export default Component;
