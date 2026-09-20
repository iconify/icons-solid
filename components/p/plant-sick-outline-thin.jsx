import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e49gfxbmn {
  d: path("M12 10c-4 0 -7 2 -7 5 4 0 7 -2 7 -5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ip9t47bii {
  d: path("M12 8c4 0 7 2 7 5 -4 0 -7 -2 -7 -5");
}

.n-0bvdyee {
  d: path("M9 15v5h6v-5Z");
}

.vt7vyubju {
  d: path("M12 4v11");
}
</style><g class="hntgybcog"><path class="n-0bvdyee"/><path class="vt7vyubju"/><path class="e49gfxbmn"/><path class="ip9t47bii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:plant-sick-outline-thin"} {...others} />);
}

export default Component;
