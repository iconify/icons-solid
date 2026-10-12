import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n3gi57bmu {
  d: path("m15.18 8.82l.55-3.03l3.16-.68m-3.71 10.07l.55 3.03l3.16.68M8.82 15.18l-.55 3.03l-3.16.68M8.82 8.82l-.55-3.03l-3.16-.68");
}

.rzyzgqcqn {
  cx: 12px;
  cy: 12px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="rzyzgqcqn"/><path class="n3gi57bmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:particle-collision-sharp"} {...others} />);
}

export default Component;
