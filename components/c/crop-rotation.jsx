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

.jv0st9g8g {
  d: path("M4 12a8 8 0 0 1 13.66-5.66M18 2.75V6.5h-3.75M20 12a8 8 0 0 1-13.66 5.66M6 21.25V17.5h3.75M12 16v-4.5");
}

.xrh49d6iu {
  d: path("M12 13.5q.02-3.52-3.5-3.5q-.02 3.52 3.5 3.5m0-1.5q3.52.02 3.5-3.5q-3.52-.02-3.5 3.5");
}
</style><g class="hntgybcog"><path class="jv0st9g8g"/><path class="xrh49d6iu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:crop-rotation"} {...others} />);
}

export default Component;
