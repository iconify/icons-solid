import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m_hdwhbev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.207 21.757h4.457v4.461h-4.457zm17.144.013h4.457v4.461h-4.457zM27.18 11.732L24 15.337l-2.967-3.605");
}

.su5r_cnzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.18 11.732h12.977a3.337 3.337 0 0 1 3.343 3.346v17.844a3.337 3.337 0 0 1-3.343 3.346H7.843A3.337 3.337 0 0 1 4.5 32.922V15.078a3.337 3.337 0 0 1 3.343-3.346h13.19");
}
</style><path class="su5r_cnzw"/><path class="m_hdwhbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bibit"} {...others} />);
}

export default Component;
