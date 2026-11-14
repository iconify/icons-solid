import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxntj7bdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.313 3.008l5.818 3.359a2.63 2.63 0 0 1 1.313 2.274v6.718a2.63 2.63 0 0 1-1.313 2.274l-5.818 3.359a2.63 2.63 0 0 1-2.625 0l-5.819-3.359a2.63 2.63 0 0 1-1.313-2.274V8.641a2.63 2.63 0 0 1 1.313-2.274l5.819-3.359a2.63 2.63 0 0 1 2.625 0");
}
</style><path class="cxntj7bdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hexagon"} {...others} />);
}

export default Component;
