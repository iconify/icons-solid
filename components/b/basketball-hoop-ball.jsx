import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2-sxwbze {
  d: path("m9.5 14l2.5 4.5l2.5-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sid_161qt {
  d: path("M7.75 6.75a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M3.5 14h17M6 14l2.25 7.5h7.5L18 14M12 2.5V11M7.75 6.75h8.5");
}
</style><g class="hntgybcog"><path class="sid_161qt"/><path class="g2-sxwbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:basketball-hoop-ball"} {...others} />);
}

export default Component;
