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

.i1hkdem9o {
  d: path("M8 19h3l2.5-4l2.5 4");
}

.lvbxx0jiq {
  d: path("M2.5 21.5v-10a9.5 9.5 0 0 1 19 0v10");
}

.poexc2ozb {
  d: path("M5.5 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="lvbxx0jiq"/><path class="poexc2ozb"/><path class="i1hkdem9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bike-hangar"} {...others} />);
}

export default Component;
