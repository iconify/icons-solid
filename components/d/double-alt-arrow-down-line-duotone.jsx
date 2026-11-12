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

.nhx5qezis {
  d: path("M19 7L12 13L5 7");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zen1fdcpk {
  d: path("M19 11L12 17L5 11");
}
</style><g class="hntgybcog"><path class="zen1fdcpk"/><path class="nhx5qezis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-down-line-duotone"} {...others} />);
}

export default Component;
