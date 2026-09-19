import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kx5_bsvkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 9.739v28.522L24 28.686");
}

.w4mozhb4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.674 27.544c-1.675-.822-2.897-2.471-2.913-4.337v-.044c0-3.797 4.04-6.65 8.055-4.497c1.23.659 2.04 1.906 2.29 3.278h0a5.23 5.23 0 0 1-2.84 5.63L4.5 38.26V9.74");
}
</style><path class="w4mozhb4g"/><path class="kx5_bsvkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:webnovel"} {...others} />);
}

export default Component;
