import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kjupx_efe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 24.02c-18.292 43.075-20.713-43.01-39 .432c10.75-34.832 12.645 12.14 19.198 12.183c8.159.054 9.35-47.193 19.802-12.615");
}

.so08sbcqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24.452s18.03-28.31 39-.432");
}
</style><path class="so08sbcqs"/><path class="kjupx_efe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:harmonic"} {...others} />);
}

export default Component;
