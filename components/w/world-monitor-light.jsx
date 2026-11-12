import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdofmibhs.css';
import '../../css/t/trvimmbgr.css';
import '../../css/d/ds9su0blt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rdofmibhs"/><path class="trvimmbgr"/><circle class="ds9su0blt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:world-monitor-light"} {...others} />);
}

export default Component;
