import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eoe13w36s {
  d: path("M21 12L8 12M12.375 16L8 12L12.375 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.is08t52yx {
  d: path("M3 20L3 4");
}
</style><g class="hntgybcog"><path class="is08t52yx"/><path class="eoe13w36s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-to-line-linear"} {...others} />);
}

export default Component;
