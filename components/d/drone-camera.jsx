import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sn95zbcnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 6.5h2.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 13.25 11h-2.5A2.25 2.25 0 0 1 8.5 8.75a2.25 2.25 0 0 1 2.25-2.25M4.5 8.75h4m7 0h4m-15 0V5.5m15 3.25V5.5M2 5.5h5m10 0h5M12 11v2.5m-3 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><path class="sn95zbcnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drone-camera"} {...others} />);
}

export default Component;
