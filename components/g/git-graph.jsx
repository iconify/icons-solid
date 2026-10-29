import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/p1yqxtwdj.css';
import '../../css/u/u0m_kbcsk.css';
import '../../css/w/wz_k07ssv.css';
import '../../css/s/s5owburgz.css';
import '../../css/d/d5cjodj1x.css';
import '../../css/y/yy4nfsb7t.css';
import '../../css/v/v2214ubbp.css';
import '../../css/n/nxn4733zl.css';
import '../../css/s/svao7lbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="p1yqxtwdj wm-shadow"/><path class="u0m_kbcsk"/><path class="wz_k07ssv"/><path class="s5owburgz"/><path class="d5cjodj1x"/><path class="yy4nfsb7t"/><path class="v2214ubbp"/><path class="nxn4733zl"/><path class="svao7lbeb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:git-graph"} {...others} />);
}

export default Component;
