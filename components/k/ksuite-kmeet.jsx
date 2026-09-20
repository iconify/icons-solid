import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq6ct2bms.css';
import '../../css/j/jya8nehdm.css';
import '../../css/d/dtug5xo5w.css';
import '../../css/v/vkhq0_bzh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aq6ct2bms"/><path class="jya8nehdm"/><path class="dtug5xo5w"/><path class="vkhq0_bzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kmeet"} {...others} />);
}

export default Component;
