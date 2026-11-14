import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.okwl7y8ss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 9l.5-5L10 7h4l3.5-3l.5 5c1 6-2 10-6 10S5 15 6 9m-2.5 1q-1.5 3 0 6m17-6q1.5 3 0 6m-11-4h.01m4.99 0h.01");
}
</style><path class="okwl7y8ss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cat-purr"} {...others} />);
}

export default Component;
