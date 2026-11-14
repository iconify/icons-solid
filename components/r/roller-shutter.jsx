import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vm64oubme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15A1.5 1.5 0 0 1 21 4a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 4a1.5 1.5 0 0 1 1.5-1.5m.5 3V21h14V5.5m-14 5h14M5 15.75h14");
}
</style><path class="vm64oubme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:roller-shutter"} {...others} />);
}

export default Component;
