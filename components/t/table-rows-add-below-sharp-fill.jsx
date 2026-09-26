import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.np3wecbsw {
  fill: currentColor;
  d: path("M3 11L21 11L21 2L3 2L3 11Z");
  stroke: none;
}

.z71h2zbod {
  d: path("M6 20L3 20L3 2L21 2L21 20L18 20M3 11L21 11M12 15L12 23M8 19L16 19");
}
</style><g class="gp_8x1bzb"><path class="np3wecbsw"/><path class="z71h2zbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-rows-add-below-sharp-fill"} {...others} />);
}

export default Component;
