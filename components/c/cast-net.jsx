import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhqnqfb6x {
  d: path("M6.75 13.5q5.25 2 10.5 0M12 2.5v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ozzb4qbps {
  d: path("M12 3.5L4 19q8 3 16 0Zm0 0L9.25 20M12 3.5L14.75 20");
}
</style><g class="hntgybcog"><path class="ozzb4qbps"/><path class="dhqnqfb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cast-net"} {...others} />);
}

export default Component;
