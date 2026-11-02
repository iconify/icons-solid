import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qf12pkbcc {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-3V7a1 1 0 0 0-2 0v5a1 1 0 0 0 1.8.6l3-4a1 1 0 0 0-1.6-1.2Z");
}
</style><path class="qf12pkbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clock-1-fill-sharp"} {...others} />);
}

export default Component;
