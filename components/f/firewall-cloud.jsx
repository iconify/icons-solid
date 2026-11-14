import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r-di6v1lc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 18.5a4.5 4.5 0 0 1 0-9a6 6 0 0 1 11 0a4.5 4.5 0 0 1 0 9ZM5 14h14m-7-4.5V14m-3.5 0v4.5m7-4.5v4.5");
}
</style><path class="r-di6v1lc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:firewall-cloud"} {...others} />);
}

export default Component;
