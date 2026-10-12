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

.wz0x19b-f {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5m-10 2V11c0 2 2.75 2 2.75 4v3.5m2.75-8.25V11c0 2-2.75 2-2.75 4m-1.75 2L12 18.75L13.75 17");
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="wz0x19b-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:file-merge"} {...others} />);
}

export default Component;
