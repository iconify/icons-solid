import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q_przxbvn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 4.05a2 2 0 0 1 3.5 0l7.1 12.7a2 2 0 0 1-1.75 2.95H4.9a2 2 0 0 1-1.75-2.95ZM12 9v4.25");
}

.qs-y-_biw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 16.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="q_przxbvn"/><path class="qs-y-_biw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:alert"} {...others} />);
}

export default Component;
