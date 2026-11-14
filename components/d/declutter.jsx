import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wt9jr7qzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 12.5h5.5A1.75 1.75 0 0 1 12 14.25v5A1.75 1.75 0 0 1 10.25 21h-5.5A1.75 1.75 0 0 1 3 19.25v-5a1.75 1.75 0 0 1 1.75-1.75m9 0h5.5A1.75 1.75 0 0 1 21 14.25v5A1.75 1.75 0 0 1 19.25 21h-5.5A1.75 1.75 0 0 1 12 19.25v-5a1.75 1.75 0 0 1 1.75-1.75M9.25 4h5.5a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-5.5a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 9.25 4M12 4v3");
}
</style><path class="wt9jr7qzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:declutter"} {...others} />);
}

export default Component;
