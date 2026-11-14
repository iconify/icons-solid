import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhdmpm8re {
  d: path("M13.25 21.5v-7a5 5 0 1 0-3.5-1.5l-4 4");
}

.gnxbd7fhv {
  d: path("M9 17H5.75v-3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fhdmpm8re"/><path class="gnxbd7fhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:roundabout-exit-sharp-left"} {...others} />);
}

export default Component;
