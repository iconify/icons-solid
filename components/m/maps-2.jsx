import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hjzwe-jgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.142 39.93l-12.751 2.8c-1.582.347-2.9-1.231-2.274-2.725L22.155 6.45c.685-1.638 3.005-1.638 3.69 0l14.038 33.555c.625 1.493-.692 3.072-2.274 2.725l-12.751-2.8a4 4 0 0 0-1.716 0");
}
</style><path class="hjzwe-jgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:maps-2"} {...others} />);
}

export default Component;
