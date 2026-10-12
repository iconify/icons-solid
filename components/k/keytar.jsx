import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cu0kclnsr {
  width: 13px;
  height: 8.5px;
  x: 2.75px;
  y: 9.25px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nd61oubvj {
  d: path("M6 13v4.75M9.25 13v4.75M12.5 13v4.75m3.25-6.25l5.5-5.5");
}
</style><g class="hntgybcog"><rect class="cu0kclnsr"/><path class="nd61oubvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:keytar"} {...others} />);
}

export default Component;
