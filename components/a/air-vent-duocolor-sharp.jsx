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

.ptuniwyyw {
  d: path("M3 3h10v18H3Zm3 4v10m4-10v10");
}

.x-uhxaclo {
  stroke-opacity: 0.4;
  d: path("M17 7h4m-4 5h4m-4 5h4");
}
</style><g class="nrj6p8qat"><path class="x-uhxaclo"/><path class="ptuniwyyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:air-vent-duocolor-sharp"} {...others} />);
}

export default Component;
