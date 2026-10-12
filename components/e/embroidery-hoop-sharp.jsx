import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cko619sdp {
  d: path("M12 16c-1.5-.95-2.6-1.9-2.6-3a1.3 1.3 0 0 1 2.6-.4a1.3 1.3 0 0 1 2.6.4c0 1.1-1.1 2.05-2.6 3ZM10.25 2.75h3.5v2.5h-3.5z");
}

.j7bg-obal {
  d: path("M17.5 13.25a5.5 5.5 0 1 1-11 0a5.5 5.5 0 1 1 11 0");
}

.w6czd5b3h {
  cx: 12px;
  cy: 13.25px;
  r: 8px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="w6czd5b3h"/><path class="j7bg-obal"/><path class="cko619sdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:embroidery-hoop-sharp"} {...others} />);
}

export default Component;
