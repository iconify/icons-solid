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

.jz9wy2bsc {
  d: path("M13.75 2.75h-6.5a2.5 2.5 0 0 0-2.5 2.5v13.5a2.5 2.5 0 0 0 2.5 2.5h9.5a2.5 2.5 0 0 0 2.5-2.5V8.25Z");
}

.wyqi3abmp {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5M12 10.75l3.5 2v4l-3.5 2l-3.5-2v-4Zm-3.5 2l3.5 2l3.5-2m-3.5 2v4");
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="wyqi3abmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:file-3d"} {...others} />);
}

export default Component;
