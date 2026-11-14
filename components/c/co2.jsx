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

.si12h7rfw {
  d: path("M6.5 20.5h11a4.5 4.5 0 0 0 0-9a6.5 6.5 0 0 0-13 .5a4.5 4.5 0 0 0 2 8.5");
}

.zzpeuqbjw {
  d: path("M8.5 13a2.25 2.25 0 1 0 0 4m2-2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6.25-.25a1.25 1.25 0 0 1 2.5 0c0 1-2.5 1.25-2.5 2.25h2.5");
}
</style><g class="hntgybcog"><path class="si12h7rfw"/><path class="zzpeuqbjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:co2"} {...others} />);
}

export default Component;
