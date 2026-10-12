import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.em-zk6b8y {
  d: path("M7 9.5h10m-5 0v6.25l-1 5.5m1-5.5l1 5.5");
}

.luhopnlkq {
  cx: 5.25px;
  cy: 9.5px;
  r: 1.75px;
}

.szl4zybhx {
  cx: 12px;
  cy: 5.75px;
  r: 1.75px;
}

.szlzq8b5o {
  cx: 18.75px;
  cy: 9.5px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysic-s1le {
  d: path("M5.25 2.75v5m13.5-5v5");
}
</style><g class="x2cwu0gfd"><path class="ysic-s1le"/><circle class="luhopnlkq"/><circle class="szlzq8b5o"/><circle class="szl4zybhx"/><path class="em-zk6b8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:gymnastic-rings-sharp"} {...others} />);
}

export default Component;
