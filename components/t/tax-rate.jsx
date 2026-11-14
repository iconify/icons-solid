import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vuml7dubs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12L8 5.5h11.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8Zm9 3.5l6-7m-5.5.75h.01m4.99 5.5h.01");
}
</style><path class="vuml7dubs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tax-rate"} {...others} />);
}

export default Component;
