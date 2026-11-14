import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.es70i754e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 6l3-3.5L15 6Zm1 0v4.5M14 6v4.5m-6.5 0h9m-6.5 0l-2 11m6-11l2 11m-11.5 0h15M9 16h6M6.25 6.5L2.5 5m15.25 1.5L21.5 5");
}
</style><path class="es70i754e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-lighthouse"} {...others} />);
}

export default Component;
