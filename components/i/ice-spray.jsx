import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.euz3ckb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h5.5v7l5.5 2q2 .75 2 3v1H8Zm-.5 16.5h14m-11-3.5v3.5m8-3.5v3.5M3.5 18h.01M3 14h.01M5 10.5h.01");
}
</style><path class="euz3ckb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ice-spray"} {...others} />);
}

export default Component;
