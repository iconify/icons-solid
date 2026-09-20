import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cub-dbc7r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.65 4.5h-27.3a2 2 0 0 0-1.95 2v12.79A24.21 24.21 0 0 1 32.61 43.5h5a2 2 0 0 0 2-2V6.45a2 2 0 0 0-1.96-1.95M13.57 15.02h14.14M13.57 9.17h20.86");
}

.k449gabri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.79 43.5h6.4A17.79 17.79 0 0 0 8.4 25.7v6.41A11.39 11.39 0 0 1 19.79 43.5m-6.41 0za5 5 0 0 0-5-5v3a2 2 0 0 0 1.95 2Z");
}
</style><path class="k449gabri"/><path class="cub-dbc7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:readerforselfoss"} {...others} />);
}

export default Component;
