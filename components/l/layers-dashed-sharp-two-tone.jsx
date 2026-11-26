import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.atkwhlh8a {
  d: path("M1.4819 11.7151L12 17.5L22.5181 11.7151M1.4819 16.2151L12 22L22.5181 16.2151");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xo94upb3m {
  stroke-opacity: 0.4;
  d: path("M8.4819 3.9349L12 2L15.5181 3.9349M18.4819 5.5651L22 7.5L18.4819 9.4349M15.5181 11.0651L12 13L8.4819 11.0651M5.5181 9.4349L2 7.5L5.5181 5.5651");
}
</style><g class="gp_8x1bzb"><path class="xo94upb3m"/><path class="atkwhlh8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:layers-dashed-sharp-two-tone"} {...others} />);
}

export default Component;
