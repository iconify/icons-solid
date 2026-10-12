import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gqho0ybfa {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.25V10a6.5 6.5 0 0 1 13 0v11.25ZM12 3.5v17.75");
}

.o6bip-kik {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.25 14h.01m3.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="gqho0ybfa"/><path class="o6bip-kik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:door-arch"} {...others} />);
}

export default Component;
