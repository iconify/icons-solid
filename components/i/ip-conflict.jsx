import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hy3ymub6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h8v5.5h-8Zm11 0h8v5.5h-8Zm-7 5.5V11q4.336 2.759 8.672 1.168m1.048-.448q.64-.313 1.28-.72V8.5m.5 6V18m0 3h.01");
}
</style><path class="hy3ymub6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ip-conflict"} {...others} />);
}

export default Component;
