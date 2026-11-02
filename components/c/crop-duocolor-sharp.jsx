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

.u6seg0vgs {
  stroke-opacity: 0.4;
  d: path("M10 6h8v8");
}

.zk274jtsj {
  d: path("M6 3v15h15M3 6h3m12 12v3");
}
</style><g class="nrj6p8qat"><path class="u6seg0vgs"/><path class="zk274jtsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:crop-duocolor-sharp"} {...others} />);
}

export default Component;
