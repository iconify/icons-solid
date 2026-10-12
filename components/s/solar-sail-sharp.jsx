import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_tsn8bxt {
  cx: 12px;
  cy: 12px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsuzqeb4j {
  d: path("m13.06 3.81l7.13 7.13L21.25 12l-1.06 1.06l-7.13 7.13L12 21.25l-1.06-1.06l-7.13-7.13L2.75 12l1.06-1.06l7.13-7.13L12 2.75zM12 4v5m0 6v5m-8-8h5m6 0h5");
}
</style><g class="x2cwu0gfd"><path class="xsuzqeb4j"/><circle class="h_tsn8bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:solar-sail-sharp"} {...others} />);
}

export default Component;
