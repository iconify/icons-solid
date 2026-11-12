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

.l5gz-vauz {
  d: path("M12 10.125L16 6L20 10.125M16 6L16 13M16 18L16 16");
}

.w-jwp9cbd {
  d: path("M4 13.875L8 18L12 13.875M8 18L8 11M8 6V8");
}
</style><g class="hntgybcog"><path class="l5gz-vauz"/><path class="w-jwp9cbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-vertical-broken"} {...others} />);
}

export default Component;
