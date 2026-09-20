import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.br5oj-bon {
  d: path("m10 13 2 -2 2 2");
}

.mfc7nxp-y {
  d: path("M9 7h6");
}

.n6bbuubnx {
  d: path("m10 16 2 -2 2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="br5oj-bon"/><path class="n6bbuubnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:priority-class-outline-regular"} {...others} />);
}

export default Component;
