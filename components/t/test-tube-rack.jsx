import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.brg-wh8ae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18h18M4.5 18v3m15-3v3M6.25 3h3.5v10.25a1.75 1.75 0 0 1-3.5 0Zm8 0h3.5v10.25a1.75 1.75 0 0 1-3.5 0Zm-8 7.5h3.5m4.5-2h3.5");
}
</style><path class="brg-wh8ae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:test-tube-rack"} {...others} />);
}

export default Component;
