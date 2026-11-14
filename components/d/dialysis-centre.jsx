import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kfrvtubws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5.5c-4 0-6 4-6 8c0 4.5 2.5 8 6.5 8c3.5 0 5-2.5 3.75-4.5c-1-1.5-1-4.5 0-6c1.25-2-.5-5.5-4.25-5.5Zm9.5-3c1.5 2 2.25 3.25 2.25 4.25a2.25 2.25 0 0 1-4.5 0c0-1 .75-2.25 2.25-4.25Z");
}
</style><path class="kfrvtubws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dialysis-centre"} {...others} />);
}

export default Component;
