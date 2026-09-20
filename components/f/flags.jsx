import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.q-thu8bqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 10.569c13.168 7.684 25.353-7.972 38-.096h-.001v27.053C30.353 29.651 18.168 45.307 5 37.622z");
}

.q3uja5isj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 28.604c13.168 7.685 25.352-7.97 37.999-.096M5 19.587c13.168 7.684 25.353-7.972 38-.096");
}
</style><path class="q3uja5isj"/><path class="q-thu8bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:flags"} {...others} />);
}

export default Component;
