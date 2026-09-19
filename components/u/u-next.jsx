import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wicwrmbra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 28c0 8.56-6.94 15.5-15.5 15.5S8.5 36.56 8.5 28V10.707a4 4 0 0 1 3.615-3.981l22.999-2.217c.129-.003.257-.009.386-.009a4 4 0 0 1 4 4z");
}

.y_8qbu_bk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32 12.809v14.7a8 8 0 1 1-16 0V14.351z");
}
</style><path class="wicwrmbra"/><path class="y_8qbu_bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:u-next"} {...others} />);
}

export default Component;
