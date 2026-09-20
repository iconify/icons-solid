import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h46tqmxqe {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2h-8.25q0 .725-.513 1.238T12 22.75t-1.237-.513T10.25 21zm4-2h5v-2H6zm7 0h5v-2h-5z");
}
</style><path class="h46tqmxqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:roller-shades-closed"} {...others} />);
}

export default Component;
