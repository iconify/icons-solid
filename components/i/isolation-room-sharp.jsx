import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gwrwmibay {
  d: path("M7.75 18.25a4.25 4.25 0 0 1 8.5 0Z");
}

.q7imirmbd {
  d: path("M2.75 3.25h18.5v18H2.75zm3 3v12m12.5-12v12");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zls1_oujj {
  cx: 12px;
  cy: 9px;
  r: 2.5px;
}
</style><g class="x2cwu0gfd"><path class="q7imirmbd"/><circle class="zls1_oujj"/><path class="gwrwmibay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:isolation-room-sharp"} {...others} />);
}

export default Component;
