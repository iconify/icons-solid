import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cnh3_nbcr {
  d: path("m11.02 12.3l2.46 1.4l.52.3l-.52.3l-2.46 1.4l-.52.3v-4zm-3.77 6.45v2.5m9.5-2.5v2.5M10 6.5l2-1.789L14 6.5M8 4.27a6 6 0 0 1 8 0");
}

.uxhwo32uz {
  d: path("M2.75 9.25h18.5v9.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="uxhwo32uz"/><path class="cnh3_nbcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:stream-tv-sharp"} {...others} />);
}

export default Component;
