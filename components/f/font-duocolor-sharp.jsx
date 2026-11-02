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

.ot27p0b5w {
  d: path("M3 18L7 6l4 12m-6-4h4");
}

.r585ypbsk {
  stroke-opacity: 0.4;
  d: path("M15 15a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6-3v6");
}
</style><g class="nrj6p8qat"><path class="r585ypbsk"/><path class="ot27p0b5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:font-duocolor-sharp"} {...others} />);
}

export default Component;
