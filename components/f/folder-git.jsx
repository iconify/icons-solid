import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/f/f--m_xh5c.css';
import '../../css/a/aqs88acua.css';
import '../../css/r/ru-4-70ld.css';
import '../../css/x/xa1xo_bwh.css';
import '../../css/e/ep9s8neke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tgy8uab8v"/><path class="f--m_xh5c"/><path class="aqs88acua"/><path class="ru-4-70ld"/><path class="xa1xo_bwh"/><path class="ep9s8neke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-git"} {...others} />);
}

export default Component;
