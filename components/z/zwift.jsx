import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.y7sm4im4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.952 6.776a5.452 5.452 0 0 0 0 10.905h4.258L6.245 33.019a5.452 5.452 0 0 0 4.707 8.204h22.524a5.452 5.452 0 1 0 0-10.905H28.74L42.5 6.776Z");
}
</style><path class="y7sm4im4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zwift"} {...others} />);
}

export default Component;
