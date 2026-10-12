import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4lcvgstx {
  d: path("M6.75 11h10.5v5H6.75zM9 13.5h6");
}

.e7x06j1kx {
  d: path("M2.75 6.75v-2h6l2 2.25h10.5v14H2.75v-2Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e7x06j1kx"/><path class="c4lcvgstx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:case-file-sharp"} {...others} />);
}

export default Component;
