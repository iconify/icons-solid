import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yqn6_6bty.css';
import '../../css/q/qui8oyv3s.css';
import '../../css/l/l0uolabhl.css';
import '../../css/u/uv0egcb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="yqn6_6bty"/><path class="qui8oyv3s wm-a"/><path class="l0uolabhl wm-k"/><path class="uv0egcb8v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paint-roller-sketch"} {...others} />);
}

export default Component;
