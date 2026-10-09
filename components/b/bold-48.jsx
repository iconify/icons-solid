import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkl3kalhn.css';
import '../../css/x/xkgq43b2x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dkl3kalhn"/><path class="xkgq43b2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bold-48"} {...others} />);
}

export default Component;
