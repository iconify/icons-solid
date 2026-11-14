import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.veeqwsbcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.914 5h6.172a2.625 2.625 0 0 1 2.5 1.822l2.812 8.75A2.625 2.625 0 0 1 17.899 19H6.101a2.625 2.625 0 0 1-2.499-3.428l2.812-8.75A2.625 2.625 0 0 1 8.914 5");
}
</style><path class="veeqwsbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:trapezoid"} {...others} />);
}

export default Component;
