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

.i-ia5xbri {
  d: path("M12 8L12 21M16 16.625L12 21L8 16.625");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zrpg8lbei {
  d: path("M20 3L4 3");
}
</style><g class="hntgybcog"><path class="zrpg8lbei"/><path class="i-ia5xbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-down-from-line-line-duotone"} {...others} />);
}

export default Component;
