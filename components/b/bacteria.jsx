import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c98nx-bxo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.04 13.92l5.74-4.82q2.49-2.09 4.58.4t-.4 4.58L9.22 18.9q-2.49 2.09-4.58-.4t.4-4.58");
}

.geoi7qkvq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.75 8c.25-1.75 1.75-2 2-3.75M18 9.75c1.75-.25 2-1.75 3.25-2");
}

.lrurejw1i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 15.5h.01M12 12.25h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="c98nx-bxo"/><path class="lrurejw1i"/><path class="geoi7qkvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bacteria"} {...others} />);
}

export default Component;
