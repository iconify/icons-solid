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

.htgcmi6rc {
  width: 16.5px;
  height: 3px;
  x: 3.75px;
  y: 18.25px;
  rx: 1.25px;
}

.oix1mac9t {
  d: path("M8.25 3.75h7.5q1 0 1.09 1l1.07 12.5q.09 1-.91 1H7q-1 0-.91-1l1.07-12.5q.09-1 1.09-1M6.8 9h10.4M6.4 13.5h11.2");
}
</style><g class="hntgybcog"><path class="oix1mac9t"/><rect class="htgcmi6rc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:traffic-barrel"} {...others} />);
}

export default Component;
