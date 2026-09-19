import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mbnnlvbuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.566 27.889l5.427-7.665h-7.986l5.427-7.664");
}

.q_zerwb7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.14 43.5c2.757-3.243 13.827-12.4 13.827-25.033C37.967 10.753 31.713 4.5 24 4.5s-13.967 6.253-13.967 13.966C10.033 31.1 21.346 40.27 24.14 43.5");
}
</style><path class="q_zerwb7i"/><path class="mbnnlvbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:incharge"} {...others} />);
}

export default Component;
