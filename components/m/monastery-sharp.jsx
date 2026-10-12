import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hh8d8ru8d {
  d: path("M10.5 6.75V3h3v3.75M10 21.25V15.5h4v5.75");
}

.nnfrnsbna {
  d: path("m12.42 6.01l8.41 5.23l.42.26H19.5v9.75h-15V11.5H2.75l.42-.26l8.41-5.23l.42-.26z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nnfrnsbna"/><path class="hh8d8ru8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:monastery-sharp"} {...others} />);
}

export default Component;
