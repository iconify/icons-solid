import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a2e2d-cmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.015 10.015A12 12 0 0 1 36.5 8.108a12 12 0 0 1 5.591 13.498a12 12 0 0 1-11.59 8.894");
}

.meutyzbuo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 12.5a6 6 0 0 1 5.796 4.447a6 6 0 0 1-2.796 6.75a6 6 0 0 1-7.243-.954M16.209 29c3.585 0 6.49 2.798 6.49 6.25s-2.905 6.25-6.49 6.25H5.5v-25h10.709c3.585 0 6.49 2.798 6.49 6.25S19.795 29 16.21 29m-.001 0H5.513");
}
</style><path class="a2e2d-cmg"/><path class="meutyzbuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hyundai-bluelink"} {...others} />);
}

export default Component;
