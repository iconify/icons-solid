import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbl9ro8wo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 14.5V5a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0m2-7.5v11M15.5 6.5h2m-2 3.5h2");
}
</style><path class="dbl9ro8wo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:climate-thermometer"} {...others} />);
}

export default Component;
