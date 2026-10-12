import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rz85jebgw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 7.75h.01M6 7.75h.01M18 13.25h.01M6 13.25h.01M18 18.75h.01M6 18.75h.01");
}

.u8ah95bgo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25V2.75m0 1c3 0 5 .75 5.75 3m-5.75-3c-3 0-5 .75-5.75 3M12 9.25c3 0 5 .75 5.75 3m-5.75-3c-3 0-5 .75-5.75 3m5.75 2.5c3 0 5 .75 5.75 3m-5.75-3c-3 0-5 .75-5.75 3");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="u8ah95bgo"/><path class="rz85jebgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:oats"} {...others} />);
}

export default Component;
