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

.n5w2i237e {
  d: path("M10 21v-5a2 2 0 0 1 4 0v5");
}

.o_z0nhg6w {
  d: path("M4 21V8h4v3h2V8h4v3h2V8h4v13Z");
}
</style><g class="hntgybcog"><path class="o_z0nhg6w"/><path class="n5w2i237e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:castle"} {...others} />);
}

export default Component;
