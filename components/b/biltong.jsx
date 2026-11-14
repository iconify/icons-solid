import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhis_7nyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 6l2.5-1.5l2 1C11.5 10 10 15 12 19l-2.5 1.5l-2-1c-2-4-.5-9-3.5-13.5m8.5-2L15 3l2 1c3 4.5 1.5 9.5 3.5 13.5L18 19l-2-1c-2-4-.5-9-3.5-14");
}
</style><path class="hhis_7nyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:biltong"} {...others} />);
}

export default Component;
