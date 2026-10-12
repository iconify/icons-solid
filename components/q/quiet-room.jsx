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

.ob4r4xn_l {
  d: path("M4.75 21.25V4.75a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v16.5m-16.5 0h18.5");
}

.wcppgw61r {
  d: path("M13.5 7.5a4 4 0 1 0 2.75 6.25A5 5 0 0 1 13.5 7.5");
}
</style><g class="hntgybcog"><path class="ob4r4xn_l"/><path class="wcppgw61r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:quiet-room"} {...others} />);
}

export default Component;
