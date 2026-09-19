import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t6zi9cbfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.301 30.545c-4.064-2.027-4.34-8.207-1.85-10.982zm2.116-.187l3.168-16.413q-3.532 1.29-5.815 4.24zm2.125.836L25.57 11.918q-3.435-.649-9.958 1.387zm5.166 4.054c20.29 6.74 41.968-18.814 9.624-22.868L14.569 32.11l22.229-14.2L16.32 33.496l22.14-3.6z");
}
</style><path class="t6zi9cbfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bnc"} {...others} />);
}

export default Component;
