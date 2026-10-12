import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sak3h7bql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 11h15.5l-1.5 8.75a1.5 1.5 0 0 1-1.5 1.25h-9.5a1.5 1.5 0 0 1-1.5-1.25Zm.6 3.5h14.3M11.5 11c.25-3 2.25-5.25 5.25-5.75a1.5 1.5 0 0 1 1.7 1.6l-.2 4.15Z");
}
</style><path class="sak3h7bql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:yogurt-parfait"} {...others} />);
}

export default Component;
