import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l567ahbgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7.75v-2a2 2 0 0 1 2-2h2m8.5 0h2a2 2 0 0 1 2 2v2m0 8.5v2a2 2 0 0 1-2 2h-2m-8.5 0h-2a2 2 0 0 1-2-2v-2m7-12.5h2.5m-2.5 16.5h2.5m-9.5-9.5v2.5m16.5-2.5v2.5");
}
</style><path class="l567ahbgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:selection-x"} {...others} />);
}

export default Component;
