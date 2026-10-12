import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eh93ce48m {
  d: path("M2.75 4.5h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ojw7pnbmt {
  d: path("m10.75 11.5l3.25 3l-2.5 2.75l.5 3.25m2-6l1.75 3.25l-.5 2.75m-3.5-8.25L9.5 15M18 7.5V14m-2-2l2 2l2-2");
}

.xkkdsjxsn {
  cx: 9.5px;
  cy: 9.25px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="eh93ce48m"/><circle class="xkkdsjxsn"/><path class="ojw7pnbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:low-ceiling"} {...others} />);
}

export default Component;
