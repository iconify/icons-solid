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

.ht_zk-bpr {
  cx: 12px;
  cy: 14.75px;
  r: 6.5px;
}

.t88z8mbby {
  cx: 12px;
  cy: 4.5px;
  r: 1.75px;
}

.x7hamjbgt {
  d: path("M12 6.25v1.5m1.75-3.25c2.5 0 4.5 1 5.5 2.75M12 14.75V11.5m0 3.25l2.25 1.5");
}
</style><g class="hntgybcog"><circle class="ht_zk-bpr"/><circle class="t88z8mbby"/><path class="x7hamjbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pocket-watch"} {...others} />);
}

export default Component;
