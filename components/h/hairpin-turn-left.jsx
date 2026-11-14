import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bl68eib_g {
  d: path("M7 12.5L4.5 15L7 17.5");
}

.q_q_vbbou {
  d: path("M19.5 20.5V7.75a4.25 4.25 0 0 0-8.5 0v3.75A3.5 3.5 0 0 1 7.5 15h-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q_q_vbbou"/><path class="bl68eib_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hairpin-turn-left"} {...others} />);
}

export default Component;
