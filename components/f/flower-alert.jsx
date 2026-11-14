import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q5ivfbcdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.25A2.5 2.5 0 1 1 13.25 10A2.5 2.5 0 1 1 10 12.5A2.5 2.5 0 1 1 6.75 10A2.5 2.5 0 1 1 8 6.25a2.5 2.5 0 1 1 4 0m-2 6.25v9M10 9h.01M18 14.75v3.5M18 21h.01");
}
</style><path class="q5ivfbcdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flower-alert"} {...others} />);
}

export default Component;
