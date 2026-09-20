import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nv49z4x2c.css';
import '../../css/k/k4a_8nb0z.css';
import '../../css/a/agvfakb4a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="nv49z4x2c"/><path class="k4a_8nb0z"/><path class="agvfakb4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:notification-message-alert"} {...others} />);
}

export default Component;
