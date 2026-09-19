import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ewjx2zb7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.565 17.542C-8.049 45.737 22.595 34.425 43.2 21.824");
}

.ktq94y3-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.839 39.499c22.126-58.422 27.511-19.977 26.913 0");
}
</style><path class="ewjx2zb7l"/><path class="ktq94y3-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:alphapolis"} {...others} />);
}

export default Component;
