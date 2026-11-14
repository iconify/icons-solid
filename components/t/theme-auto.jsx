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

.o1z2wccdo {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.tad294bfy {
  d: path("M12 7a5 5 0 0 1 0 10Zm0-4.5v2m0 15v2M2.5 12h2m.75-6.75l1.5 1.5m-1.5 12l1.5-1.5");
}
</style><g class="hntgybcog"><path class="o1z2wccdo"/><path class="tad294bfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:theme-auto"} {...others} />);
}

export default Component;
