import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nobu3e0if {
  d: path("M2.5 8.5a2 2 0 0 1 2-2h2l1.5-2h3l1.5 2h3V18h-11a2 2 0 0 1-2-2Zm13-.5L21 6v13l-5.5-2Z");
}

.qw6be3s5p {
  d: path("M5.5 9.5h7V15h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nobu3e0if"/><path class="qw6be3s5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:camera-flip-screen"} {...others} />);
}

export default Component;
