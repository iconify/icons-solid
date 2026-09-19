import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vz2xvyb4k {
  fill: currentColor;
  d: path("M13 7h-2v2h2zm0 4h-2v6h2zM5 1v22h14V1zm12 18H7V5h10z");
}
</style><path class="vz2xvyb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-perm-device-information"} {...others} />);
}

export default Component;
