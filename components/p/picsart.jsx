import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t78n6-bpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5A14.1 14.1 0 0 0 9.9 18.6a14.1 14.1 0 0 0 24.07 9.97a14.1 14.1 0 0 0 0-19.94A14.27 14.27 0 0 0 24 4.5");
}

.z5-_hyblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.932 12.29a6.28 6.28 0 1 0 4.44 1.84a6.36 6.36 0 0 0-4.44-1.84m-6.28 18.884v8.45a3.876 3.876 0 0 1-3.876 3.876h0A3.876 3.876 0 0 1 9.9 39.624V18.6");
}
</style><path class="t78n6-bpr"/><path class="z5-_hyblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:picsart"} {...others} />);
}

export default Component;
