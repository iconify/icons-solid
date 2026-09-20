import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vdir_xrll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
  d: path("M4 21v-5c0 -4 4 -7 8 -5 1 0.5 2 1.5 2 3V9c0 -3 3 -5 5 -3s2 6 1 9 -3 6 -7 6Z");
}
</style><path class="vdir_xrll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:muscle-outline-bold"} {...others} />);
}

export default Component;
