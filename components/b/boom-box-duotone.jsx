import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xoxa5dlty.css';
import '../../css/r/rbxd60zrd.css';
import '../../css/x/xy2-b82ip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xoxa5dlty"/><path clip-rule="evenodd" class="rbxd60zrd"/><path class="xy2-b82ip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:boom-box-duotone"} {...others} />);
}

export default Component;
