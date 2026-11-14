import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u_qle2btc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM8 20v-3c0-2.5 1.75-4.25 4-4.25s4 1.75 4 4.25v3M2.5 10A2.25 2.25 0 1 0 7 10a2.25 2.25 0 1 0-4.5 0Zm0 10v-1.75c0-2 1.25-3.25 3-3.25M17 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4.5 10v-1.75c0-2-1.25-3.25-3-3.25");
}
</style><path class="u_qle2btc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:responder-team"} {...others} />);
}

export default Component;
