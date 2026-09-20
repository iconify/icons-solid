import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ab1-szb3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 6.577h-9.769v25.035");
}

.lh6d3obip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.001 41.268a9.811 9.811 0 1 1 7.897-7.793m-16.57-8.801L4.5 8.846");
}

.tvkhl6h3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.73 31.612a6.465 6.465 0 0 1-6.464 6.465a6.465 6.465 0 0 1-6.466-6.465a6.465 6.465 0 0 1 6.465-6.465a6.465 6.465 0 0 1 6.466 6.465Z");
}
</style><path class="ab1-szb3l"/><path class="tvkhl6h3a"/><path class="lh6d3obip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:automatag"} {...others} />);
}

export default Component;
