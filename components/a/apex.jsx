import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m_xtppbhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.46c.71 0 1.42.66 2.82 2.29l6.51 6.5v-3.68h4v7.69l6.16 6.16l-2.83 2.83L24 10.57L7.33 27.25L4.5 24.42L21.17 7.75c1.42-1.42 2.14-2.23 2.83-2.29m13.35 18.46V41.2A1.33 1.33 0 0 1 36 42.54H12a1.33 1.33 0 0 1-1.33-1.34V23.9m22.67-9.65l4 4.01");
}
</style><path class="m_xtppbhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:apex"} {...others} />);
}

export default Component;
