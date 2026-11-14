import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hgjirkb5w {
  d: path("M2.807 12.787a12 12 0 0 1 18.386 0M12 20.5l-9.25-7.75M12 20.5l9.25-7.75M12 20.5l-5-11m5 11v-12m0 12l5-11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4gn3kdto {
  fill: currentColor;
  d: path("M11 20.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="hgjirkb5w"/><path class="y4gn3kdto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:menopause"} {...others} />);
}

export default Component;
