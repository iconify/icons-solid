import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i780oo3eq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11.75h.01");
}

.iseisybnm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.54 4.3l11.93-1.25q1.99-.21 2.2 1.78l.57 5.47q.21 1.99-1.78 2.2L6.53 13.75q-1.99.21-2.2-1.78L3.76 6.5q-.21-1.99 1.78-2.2M12 13.25v8m0-15.5v3.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="iseisybnm"/><path class="i780oo3eq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:protest-sign"} {...others} />);
}

export default Component;
