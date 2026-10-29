import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iw7sgcb0o.css';
import '../../css/m/made-2n8s.css';
import '../../css/o/o2-y213ts.css';
import '../../css/g/gww7jop3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="iw7sgcb0o"/><path class="made-2n8s wm-a"/><path class="o2-y213ts wm-k"/><path class="gww7jop3j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-moon-sketch"} {...others} />);
}

export default Component;
