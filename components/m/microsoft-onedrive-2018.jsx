import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3a_m_e4a.css';
import '../../css/v/vcbqy5bsy.css';
import '../../css/k/kaoxaxu7c.css';
import '../../css/x/xd6m6dxve.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d3a_m_e4a"/><path class="vcbqy5bsy"/><path class="kaoxaxu7c"/><path class="xd6m6dxve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-onedrive-2018"} {...others} />);
}

export default Component;
