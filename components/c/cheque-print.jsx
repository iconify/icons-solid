import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w-n46obft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6.5h12a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 11v-1A3.5 3.5 0 0 1 6 6.5m.5 0v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3m-12 8v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6m-10 3.25h4M18 10.5h.01");
}
</style><path class="w-n46obft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cheque-print"} {...others} />);
}

export default Component;
