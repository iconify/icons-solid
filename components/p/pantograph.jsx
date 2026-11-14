import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iv0qwqxmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M2.5 21v-5A2.5 2.5 0 0 1 5 13.5h14a2.5 2.5 0 0 1 2.5 2.5v5M8 13.5l6.5-5l-3.5-5m-5 14h12");
}
</style><path class="iv0qwqxmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pantograph"} {...others} />);
}

export default Component;
