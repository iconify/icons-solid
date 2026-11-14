import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o21ze4zyd {
  d: path("M5.5 11.5V6A2.25 2.25 0 0 1 10 6v5.5m4 0V6a2.25 2.25 0 0 1 4.5 0v5.5");
}

.t799q67bs {
  d: path("M2.5 6h19M6.084 11.5h11.832a1.75 1.75 0 0 1 1.742 1.576l.65 6.5a1.75 1.75 0 0 1-1.742 1.924H5.434a1.75 1.75 0 0 1-1.742-1.924l.65-6.5A1.75 1.75 0 0 1 6.084 11.5");
}
</style><g class="hntgybcog"><path class="t799q67bs"/><path class="o21ze4zyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bag-holder-rack"} {...others} />);
}

export default Component;
