import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4minvbuf.css';
import '../../css/i/i6s53x8dt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x4minvbuf"/><path class="i6s53x8dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zabbix"} {...others} />);
}

export default Component;
