import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7eb6oz7y {
  d: path("M12 8L12 22M7 13L3 13C3 17.9706 7.0294 22 12 22C16.9706 22 21 17.9706 21 13L17 13");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tv-ylcblu {
  fill: currentColor;
  d: path("M16 5C16 7.2091 14.2091 9 12 9C9.7909 9 8 7.2091 8 5C8 2.7909 9.7909 1 12 1C14.2091 1 16 2.7909 16 5Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="tv-ylcblu"/><path class="c7eb6oz7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:anchor-sharp-fill"} {...others} />);
}

export default Component;
