import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iezjb0bkd {
  fill: currentColor;
  d: path("M6 21v-4H2v-6q0-1.275.875-2.137T5 8h14q1.275 0 2.138.863T22 11v.75q-.675-.35-1.412-.55t-1.513-.2q-1.95 0-3.537 1.1T13.25 15H8v4h5.1q.175.55.425 1.05t.6.95zM6 7V3h12v4zm11.95 13.175L15.1 17.35l1.425-1.4l1.425 1.4l3.525-3.525l1.425 1.4z");
}
</style><path class="iezjb0bkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:print-connect"} {...others} />);
}

export default Component;
