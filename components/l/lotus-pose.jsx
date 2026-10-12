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

.ra_jmqbjv {
  d: path("M12 7.5v4.75M7 13l2.5-4.5h5L17 13M2.75 14.5c.5 4 4.25 6.75 9.25 6.75s8.75-2.75 9.25-6.75c-2.5-.5-5 .25-6.5 1.75C14.25 15 13.25 14 12 13.5c-1.25.5-2.25 1.5-2.75 2.75c-1.5-1.5-4-2.25-6.5-1.75");
}

.t88z8mbby {
  cx: 12px;
  cy: 4.5px;
  r: 1.75px;
}
</style><g class="hntgybcog"><circle class="t88z8mbby"/><path class="ra_jmqbjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lotus-pose"} {...others} />);
}

export default Component;
