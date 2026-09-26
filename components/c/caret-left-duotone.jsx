import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.doch_vycb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.25868 12.456L17.2159 18.9273C17.5635 19.1326 18 18.8787 18 18.4713V5.52868C18 5.12126 17.5635 4.86742 17.2159 5.0727L6.25868 11.544C5.91377 11.7477 5.91377 12.2523 6.25868 12.456Z");
}
</style><path class="doch_vycb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:caret-left-duotone"} {...others} />);
}

export default Component;
