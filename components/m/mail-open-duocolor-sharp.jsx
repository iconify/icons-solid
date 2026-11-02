import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqhp1dbuy {
  d: path("m12 3l9 6v12H3V9z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o56uuxb3r {
  stroke-opacity: 0.4;
  d: path("m3 9l6 6h6l6-6");
}
</style><g class="nrj6p8qat"><path class="o56uuxb3r"/><path class="iqhp1dbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-open-duocolor-sharp"} {...others} />);
}

export default Component;
