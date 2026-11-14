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

.ldsb6d2wm {
  d: path("m7.5 9.75l4.5 1l4.5-1m-4.5 1V14m-2.75 4L12 14l2.75 4");
}

.vn941ccag {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 7h.01");
}
</style><g class="hntgybcog"><path class="vn941ccag"/><path class="ldsb6d2wm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:universal-access"} {...others} />);
}

export default Component;
