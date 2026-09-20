import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jhq2fxlof {
  d: path("m3 15 6 -6h12l-6 6Z");
}

.me9dqjepj {
  fill: currentColor;
  d: path("m3 15 6 -6h12l-6 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rsvh7b0ab {
  d: path("M3 15v4h12l6 -6V9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uk_l5kxob {
  d: path("M9 9v4l-6 6");
}
</style><g class="s0phu2bbs"><path class="me9dqjepj"/><path class="jhq2fxlof"/><path class="rsvh7b0ab"/><path class="uk_l5kxob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:eraser-duotone-bold"} {...others} />);
}

export default Component;
