import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh377bbur.css';
import '../../css/m/mrupvohhm.css';
import '../../css/r/rppc_db6b.css';
import '../../css/m/mm6yhpb8c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sh377bbur"/><path class="mrupvohhm"/><path class="rppc_db6b"/><path class="mm6yhpb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lowerleftpen"} {...others} />);
}

export default Component;
