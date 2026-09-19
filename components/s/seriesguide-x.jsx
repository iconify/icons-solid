import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hb12o5ccu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 10.5h-31c-2.21 0-4 1.79-4 4v19c0 2.21 1.79 4 4 4h31c2.21 0 4-1.79 4-4v-19c0-2.21-1.79-4-4-4m0 17.7l-4 5.3m4 0l-4-5.3");
}

.ro42ztv1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35 16.87L20.36 31.51s-7.24-7.18-7.32-7.18");
}
</style><path class="ro42ztv1t"/><path class="hb12o5ccu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:seriesguide-x"} {...others} />);
}

export default Component;
