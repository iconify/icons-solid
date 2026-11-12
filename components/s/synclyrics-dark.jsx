import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rk0phibge.css';
import '../../css/o/ozfgr-c4g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rk0phibge"/><path class="ozfgr-c4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:synclyrics-dark"} {...others} />);
}

export default Component;
