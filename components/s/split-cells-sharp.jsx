import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aip0rkx9y {
  d: path("M9.5 12h-4m2-2l-2 2l2 2m7-2h4m-2-2l2 2l-2 2");
}

.ukzm5uscx {
  d: path("M2.75 4.75h18.5v14.5H2.75zm9.25 0v14.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ukzm5uscx"/><path class="aip0rkx9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:split-cells-sharp"} {...others} />);
}

export default Component;
