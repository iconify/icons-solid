import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.lhonpxbtg {
  fill: currentColor;
  d: path("M3.501 2a1.5 1.5 0 0 0-1.5 1.5v6.997a1.5 1.5 0 0 0 1.5 1.5h2.5V13H4.495a.5.5 0 0 0 0 1H8v-1H7v-1.003h1.001L8.003 8.5a1.5 1.5 0 0 1 2.582-1.039l3.348 3.484q.067-.212.068-.447V3.5a1.5 1.5 0 0 0-1.5-1.5zm6.363 6.153a.5.5 0 0 0-.86.347L9 14.502a.5.5 0 0 0 .906.292l1.37-1.908l2.4.559a.5.5 0 0 0 .473-.834z");
}
</style><path class="lhonpxbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:desktop-cursor-16-filled"} {...others} />);
}

export default Component;
