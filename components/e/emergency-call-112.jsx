import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dh2ge92ax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h3L9.5 7l-2 1.5a10 10 0 0 0 4.25 4.25l1.5-2l4.5 1.5v3a2.5 2.5 0 0 1-2.5 2.5A15.25 15.25 0 0 1 2.5 5A2.5 2.5 0 0 1 5 2.5ZM20.75 14v4.25m0 3h.01");
}
</style><path class="dh2ge92ax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:emergency-call-112"} {...others} />);
}

export default Component;
