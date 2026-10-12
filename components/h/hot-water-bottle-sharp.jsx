import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wuuyub5xl {
  d: path("M9.25 5.5h5.5v2.45l.75.15l2.75.9l1.25.417V21.25h-15V9.417L5.75 9l2.75-.9l.75-.15v-.7Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhvny9bnl {
  d: path("m7.5 13.75l2.25-1.5l2.25 1.5l2.25 1.5l2.25-1.5m-9 3.5l2.25-1.5l2.25 1.5l2.25 1.5l2.25-1.5M8.75 5.5V3h6.5v2.5Z");
}
</style><g class="x2cwu0gfd"><path class="wuuyub5xl"/><path class="xhvny9bnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hot-water-bottle-sharp"} {...others} />);
}

export default Component;
