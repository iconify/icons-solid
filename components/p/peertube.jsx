import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gcyc2ib3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.83 4.5l16.89 9.75L42.6 24l-16.88 9.75L8.83 43.5V24l8.36 4.83l8.42 4.87V14.27l-8.42 4.87L8.83 24z");
}
</style><path class="gcyc2ib3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:peertube"} {...others} />);
}

export default Component;
