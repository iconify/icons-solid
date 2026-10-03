import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dl_n0-bws {
  stroke-opacity: 0.4;
  d: path("M10 7L3 7L3 21L17 21L17 14");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sqq2n-3lj {
  d: path("M12.7071 11.2929L20.8536 3.1464M12 3L21 3L21 12");
}
</style><g class="gp_8x1bzb"><path class="dl_n0-bws"/><path class="sqq2n-3lj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-arrow-out-up-right-sharp-two-tone"} {...others} />);
}

export default Component;
