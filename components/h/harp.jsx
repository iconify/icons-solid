import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p20a1bc3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 3.75v17h3m-3-17c2.5 0 4 3 7.5 3c2.5 0 4-1.5 5.75-1.5m-9.75.65v12.5M12.5 7.35V14m3.25-6.9v2.5M19 5.25L7.5 20.75");
}
</style><path class="p20a1bc3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:harp"} {...others} />);
}

export default Component;
