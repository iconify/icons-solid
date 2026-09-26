import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pzwz5-bow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 7.0059C5 5.271102 7.057553 4.358975 8.343026 5.523914L14.671513 11.259007C15.109496 11.655922 15.109496 12.344078 14.671513 12.740993L8.343026 18.476086C7.057553 19.641025 5 18.728898 5 16.9941ZM19 5V19");
}
</style><path class="pzwz5-bow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:skip-forward"} {...others} />);
}

export default Component;
