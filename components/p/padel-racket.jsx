import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jq0w26bhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 5.5a7 5.75-45 0 0-10 10a7 5.75-45 0 0 10-10m-10 10L4 20m9.5-12h.01m-1.76 3.25h.01m3.49 0h.01");
}
</style><path class="jq0w26bhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:padel-racket"} {...others} />);
}

export default Component;
