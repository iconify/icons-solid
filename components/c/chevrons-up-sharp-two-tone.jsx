import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ouotnccue {
  d: path("M6.7071 18.2929L12 13L17.2929 18.2929");
}

.p61phbjmj {
  stroke-opacity: 0.4;
  d: path("M6.7071 11.2929L12 6L17.2929 11.2929");
}
</style><g class="gp_8x1bzb"><path class="p61phbjmj"/><path class="ouotnccue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevrons-up-sharp-two-tone"} {...others} />);
}

export default Component;
