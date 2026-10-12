import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dx-zi1ltd {
  width: 15px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hzma9bb3u {
  cx: 8px;
  cy: 18.25px;
  r: 2.5px;
}

.u83ecs0hu {
  d: path("M5.75 8.75h4.5v3.5h-4.5Zm7 9.5V10H15v8.25m2.75-2h3.5");
}
</style><g class="hntgybcog"><rect class="dx-zi1ltd"/><path class="u83ecs0hu"/><circle class="hzma9bb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:caravan"} {...others} />);
}

export default Component;
