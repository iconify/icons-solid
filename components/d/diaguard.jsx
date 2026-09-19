import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n9to1i3cq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.7 20.969c3.954 3.774 4.214 9.451 2.074 14.383A13.85 13.85 0 0 1 24 43.5a13.85 13.85 0 0 1-12.775-8.148c-2.14-4.932-1.874-10.608 2.08-14.383A72.5 72.5 0 0 0 23.998 4.5a72.7 72.7 0 0 0 10.7 16.469Z");
}
</style><path class="n9to1i3cq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:diaguard"} {...others} />);
}

export default Component;
