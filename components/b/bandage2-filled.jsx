import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zd2s8xmoy.css';
import '../../css/z/zdh_jsyip.css';
import '../../css/u/ude1m_b4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zd2s8xmoy"/><path clip-rule="evenodd" class="zdh_jsyip"/><path class="ude1m_b4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bandage2-filled"} {...others} />);
}

export default Component;
