import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s8drx-5dy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.966 28.994c-2.267 2.676-6.46 5.64-6.46 5.64M11.91 41.94c6.5-.573 16.688-3.305 16.688-3.305m-10.593-9.519v11.928");
}

.vyx5nvbkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.957 11.013h34.086M8.705 17.349h30.59M5.5 24.123h37M6.957 35.412C16.935 31.261 24 24.122 24 24.122V6.06m18.5 35.616C29.681 37.16 24 24.123 24 24.123");
}
</style><path class="vyx5nvbkk"/><path class="s8drx-5dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:anihyou"} {...others} />);
}

export default Component;
