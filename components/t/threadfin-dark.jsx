import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqdnidbra.css';
import '../../css/p/ps2d02mlf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iqdnidbra"/><path class="ps2d02mlf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:threadfin-dark"} {...others} />);
}

export default Component;
