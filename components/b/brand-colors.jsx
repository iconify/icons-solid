import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vzt_33-0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c-5.5 0-9 4-9 9s4 9 9 9c1.5 0 2-1 2-2c0-1.5-1-2-1-3.25c0-1 .75-1.75 2-1.75h2.5c2 0 3.5-1.5 3.5-3.5C21 6 17 3 12 3M7.75 13h.01M9 8h.01m5.49-.5h.01");
}
</style><path class="vzt_33-0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:brand-colors"} {...others} />);
}

export default Component;
