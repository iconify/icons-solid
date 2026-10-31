import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qnrbdrvpd.css';
import '../../css/o/o9x0zt3az.css';
import '../../css/m/me84ynbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qnrbdrvpd"/><path class="o9x0zt3az wm-k"/><path class="me84ynbpn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:podcast"} {...others} />);
}

export default Component;
