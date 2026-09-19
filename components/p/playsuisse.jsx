import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yx6ofccbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.78 21.06h-7.17v-7.17h-5.88v7.17h-7.17v5.88h7.17v7.17h5.88v-7.17h7.17zM8.94 14.77l-4.16 4.16L9.85 24l-5.07 5.07l4.16 4.16L18.16 24z");
}
</style><path class="yx6ofccbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:playsuisse"} {...others} />);
}

export default Component;
