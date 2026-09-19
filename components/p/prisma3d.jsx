import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.v9a4g_b9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.253 29.999l17.023 9.828m-36.552.001L22.746 30M24 27.803V8.172m0 7.343L12.083 36.156h23.834z");
}
</style><path class="v9a4g_b9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:prisma3d"} {...others} />);
}

export default Component;
