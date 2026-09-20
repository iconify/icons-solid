import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b7qkneb7n {
  fill: none;
  stroke: currentColor;
  stroke-dashoffset: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24.143C2.5 12.268 12.126 2.64 24 2.64s21.5 9.627 21.5 21.502c0 10.526-7.62 19.504-18.007 21.216l-.002-15.019h6.59L24 12.66L13.92 30.34h6.589l-.002 15.019C10.12 43.647 2.5 34.669 2.5 24.143");
}
</style><path class="b7qkneb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:speedtop"} {...others} />);
}

export default Component;
