import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gttf8eb9g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.75 13.75h.01M9.5 21h.01M17 21h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ypgp13bpg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 3a4 4 0 0 0 5.25 5.25A5.5 5.5 0 1 1 12.5 3M3.75 17.25q2.06-1.5 4.13 0t4.12 0t4.13 0t4.12 0");
}
</style><g class="y9tr6bcfx"><path class="ypgp13bpg"/><path class="gttf8eb9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:moon-dust"} {...others} />);
}

export default Component;
