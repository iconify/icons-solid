import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r0d8b8c8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 17.75l.641-2.138a1.5 1.5 0 0 1 .376-.629l9.466-9.466a1.5 1.5 0 0 1 .629-.376L17.75 4.5a1.405 1.405 0 0 1 1.75 1.75l-.641 2.138a1.5 1.5 0 0 1-.376.629l-9.466 9.466a1.5 1.5 0 0 1-.629.376L6.25 19.5a1.405 1.405 0 0 1-1.75-1.75m.75-2.5l3.5 3.5m6.5-13.5l3.5 3.5");
}
</style><path class="r0d8b8c8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blending-stump"} {...others} />);
}

export default Component;
