import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.esd6_y3av {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.403 44.744a21.5 21.5 0 0 1-23.176-33.1C12.41 4.24 21.64.99 30.403 3.21c12.289 3.11 20.612 18.994 7.933 32.77l-8.503-19.93l-8.503 19.93l-8.504-19.93");
}
</style><path class="esd6_y3av"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:workplace-from-meta"} {...others} />);
}

export default Component;
