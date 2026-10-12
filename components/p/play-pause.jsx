import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l34_9ihcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.48 6.61l6.54 4.53q1.23.86 0 1.72l-6.54 4.53q-1.23.86-1.23-.64v-9.5q0-1.5 1.23-.64m11.27-.86v12.5m4.5-12.5v12.5");
}
</style><path class="l34_9ihcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:play-pause"} {...others} />);
}

export default Component;
