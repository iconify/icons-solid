import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iar5v5b5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 26.829l27.943-5.859m-4.247.89v10.416h7.126m2.716-8.03a4.355 4.355 0 1 1-1.787-8.524a4.355 4.355 0 0 1 1.787 8.525M5.5 32.372V26.83");
}
</style><path class="iar5v5b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:exercices-de-gainage"} {...others} />);
}

export default Component;
