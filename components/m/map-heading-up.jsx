import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gb8785vre {
  d: path("M15.167 20.405L8.5 18.5l-6 2v-15l6-2l7 2l6-2v11.071M8.5 3.5v15m7-13v8.1M18 21v-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mee2o7qts {
  d: path("M15.5 17.5L18 15l2.5 2.5");
}
</style><g class="hntgybcog"><path class="gb8785vre"/><path class="mee2o7qts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:map-heading-up"} {...others} />);
}

export default Component;
