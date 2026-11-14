import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.flq55wseh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m9.75 6.75a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M8.5 10h.01m6.74 3.75h.01");
}
</style><path class="flq55wseh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:googly-eyes"} {...others} />);
}

export default Component;
