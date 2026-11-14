import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhfgq7bop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7h15M12 4v16.5m-4 0h8M3 13a3 3 0 0 0 6 0Zm12 0a3 3 0 0 0 6 0ZM6 7l-3 6m3-6l3 6m9-6l-3 6m3-6l3 6");
}
</style><path class="dhfgq7bop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:balance-scale-pharmacy"} {...others} />);
}

export default Component;
