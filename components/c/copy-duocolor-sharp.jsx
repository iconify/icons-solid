import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y0fgq8blw {
  d: path("M3 7h14v14H3Z");
}

.znvli555c {
  stroke-opacity: 0.4;
  d: path("M7 3h14v14");
}
</style><g class="nrj6p8qat"><path class="znvli555c"/><path class="y0fgq8blw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-duocolor-sharp"} {...others} />);
}

export default Component;
