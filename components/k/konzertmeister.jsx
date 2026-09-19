import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nl21eobsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.54 5.5H42.5L26.566 24l15.878 18.5H5.5m5.854-33.24v29.618m0-10.316L27.273 9.359m0 29.519L15.078 24.069");
}
</style><path class="nl21eobsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:konzertmeister"} {...others} />);
}

export default Component;
