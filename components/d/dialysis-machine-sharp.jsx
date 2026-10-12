import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6bm-rb3x {
  d: path("M7 5h6.5v4.5H7zm.5 8.25H9m2.5 0H13M7.5 17h6m2.25-8.75h4v10.5h-3.5");
}

.vt1k1yv9q {
  d: path("M4.75 2.75h11v18.5h-11z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vt1k1yv9q"/><path class="m6bm-rb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dialysis-machine-sharp"} {...others} />);
}

export default Component;
