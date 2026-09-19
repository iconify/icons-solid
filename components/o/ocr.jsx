import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bivv2bbco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.1 5.5H5.5V18m0 11.9v12.6h11.4m14.1 0h11.5V30m0-11.8V5.5H30.9M9.7 11.2h29.1M9.7 19.5h29.1M9.7 27.8h29.1M9.6 36.2h21.9");
}
</style><path class="bivv2bbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ocr"} {...others} />);
}

export default Component;
