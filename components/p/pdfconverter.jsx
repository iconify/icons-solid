import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qg73-pbbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28 27.32l7.4 10.73a.56.56 0 0 1-.45.87h-21.9a.56.56 0 0 1-.39-1l6.14-6.13a.54.54 0 0 1 .78 0l1.09 1.08a.54.54 0 0 0 .78 0l5.68-5.68a.55.55 0 0 1 .87.13M19.55 9.08H12.5v11.15l3.53-3.03l3.52 3.03z");
}

.uhx3m_1tm {
  width: 31px;
  height: 39px;
  x: 8.5px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="uhx3m_1tm"/><path class="qg73-pbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pdfconverter"} {...others} />);
}

export default Component;
