import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v0vhadc2o.css';
import '../../css/t/t4rsb0bdb.css';
import '../../css/v/vn72fibji.css';
import '../../css/n/n5_q2jfbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="v0vhadc2o wm-shadow"/><path class="t4rsb0bdb wm-shadow"/><path class="vn72fibji"/><path class="n5_q2jfbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:handshake"} {...others} />);
}

export default Component;
