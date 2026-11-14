import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eqmz3qbnr {
  d: path("m10.25 6.5l-3 6h3.5l-3 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf9u12bqf {
  d: path("M4 3h10v18.5H4Zm10 4h3a2 2 0 0 1 2 2v7m-1.5 0h3v3.5h-3Z");
}
</style><g class="ulnmmdpxh"><path class="zf9u12bqf"/><path class="eqmz3qbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:charger-kwh-delivered"} {...others} />);
}

export default Component;
