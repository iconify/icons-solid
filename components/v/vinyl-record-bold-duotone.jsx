import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bhgkc_7kn.css';
import '../../css/y/yigc9bbwq.css';
import '../../css/m/md89sq31k.css';
import '../../css/m/mf8sa2svj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bhgkc_7kn"/><path class="yigc9bbwq"/><path class="md89sq31k"/><path clip-rule="evenodd" class="mf8sa2svj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:vinyl-record-bold-duotone"} {...others} />);
}

export default Component;
