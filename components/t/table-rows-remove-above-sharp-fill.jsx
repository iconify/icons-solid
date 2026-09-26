import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.omq-_cbgb {
  d: path("M6 4L3 4L3 22L21 22L21 4L18 4M3 13L21 13M8.7071 1.7071L15.2929 8.2929M15.2929 1.7071L8.7071 8.2929");
}

.uyfeqvb8a {
  fill: currentColor;
  d: path("M3 13L21 13L21 22L3 22L3 13Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="uyfeqvb8a"/><path class="omq-_cbgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-rows-remove-above-sharp-fill"} {...others} />);
}

export default Component;
