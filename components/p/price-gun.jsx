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

.riicxccon {
  d: path("M12.25 7.5h6M14 11.25h3.75q1 0 .93 1l-.61 8q-.07 1-1.07 1h-2.25q-1 0-1.07-1l-.61-8q-.07-1 .93-1m-1 4h-1.5a1 1 0 0 1-1-1v-3M3.17 6.88l.66-1.01q.42-.62 1.17-.62h.25Q6 5.25 6 6v3q0 .75-.75.75H5q-.75 0-1.17-.62l-.66-1.01q-.42-.62 0-1.24");
}

.v7__dozbm {
  width: 12.25px;
  height: 7.5px;
  x: 9px;
  y: 3.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="v7__dozbm"/><path class="riicxccon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:price-gun"} {...others} />);
}

export default Component;
