import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o0ay352pi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 4h2.75A2.625 2.625 0 0 1 10.5 6.625v10.75A2.625 2.625 0 0 1 7.875 20h-2.75A2.625 2.625 0 0 1 2.5 17.375V6.625A2.625 2.625 0 0 1 5.125 4m11 0h2.75A2.625 2.625 0 0 1 21.5 6.625v10.75A2.625 2.625 0 0 1 18.875 20h-2.75a2.625 2.625 0 0 1-2.625-2.625V6.625A2.625 2.625 0 0 1 16.125 4M10.5 12h3M5.25 8h2.5m8.5 0h2.5M6.5 15.5h.01m10.99 0h.01");
}
</style><path class="o0ay352pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:active-active"} {...others} />);
}

export default Component;
