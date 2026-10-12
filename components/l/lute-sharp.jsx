import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfom1ccsl {
  cx: 9px;
  cy: 13.5px;
  r: 1.75px;
}

.vlm0t2brk {
  d: path("M4.4 18.1a6.5 5-45 1 0 9.2-9.2a6.5 5-45 1 0-9.2 9.2Zm9.2-9.2L18 4.5m0 0l3 3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vlm0t2brk"/><circle class="dfom1ccsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lute-sharp"} {...others} />);
}

export default Component;
