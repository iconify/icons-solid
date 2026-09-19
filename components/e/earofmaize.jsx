import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt_mgpbid.css';
import '../../css/o/o6nn443db.css';
import '../../css/v/v_kq-2bzc.css';
import '../../css/q/qqog5e9wf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vt_mgpbid"/><path class="o6nn443db"/><path class="v_kq-2bzc"/><path class="qqog5e9wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:earofmaize"} {...others} />);
}

export default Component;
