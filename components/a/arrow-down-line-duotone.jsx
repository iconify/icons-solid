import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp0t1_y6e {
  d: path("M18 14L12 20L6 14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sijy5cc4z {
  d: path("M12 4V20");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="sijy5cc4z"/><path class="gp0t1_y6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-down-line-duotone"} {...others} />);
}

export default Component;
