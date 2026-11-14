import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewq0hlbja {
  d: path("M9.5 7h1A1.5 1.5 0 0 1 12 8.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 8 9.5v-1A1.5 1.5 0 0 1 9.5 7m4 0h1A1.5 1.5 0 0 1 16 8.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 12 9.5v-1A1.5 1.5 0 0 1 13.5 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.urirpovri {
  d: path("M3.5 11h17l-2 10.5h-13Zm0 0a8.5 8.5 0 0 1 17 0");
}
</style><g class="hntgybcog"><path class="urirpovri"/><path class="ewq0hlbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:object-storage"} {...others} />);
}

export default Component;
