import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e69i7fcek {
  d: path("M17 12h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rbdg4rb5l {
  d: path("M3 17h14V7h-4Z");
}
</style><g class="hntgybcog"><path class="rbdg4rb5l"/><path class="e69i7fcek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:kitchen-knife-outline-thin"} {...others} />);
}

export default Component;
