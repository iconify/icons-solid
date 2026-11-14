import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fpqcstutu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 7c-.5-1.75-1.75-2.5-3.25-2.5c-2 0-3.5 1.5-3.5 3.75V15c0 2-1 3.5-2.75 4.5h10M7 12h7");
}
</style><path class="fpqcstutu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:currency-pound"} {...others} />);
}

export default Component;
