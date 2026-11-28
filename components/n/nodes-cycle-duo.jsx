import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5moh7bqy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uhj0qpbor.css';
import '../../css/p/pm_33z_9v.css';
import '../../css/a/ap98m_b0x.css';
import '../../css/w/w4_jmib7j.css';
import '../../css/m/m48j9y7th.css';
import '../../css/a/a2tgzz9vd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary y5moh7bqy"/><g class="dt0cm9dhy primary"><path class="uhj0qpbor"/><path class="pm_33z_9v"/><path class="ap98m_b0x"/><path class="w4_jmib7j"/><path class="m48j9y7th"/><path class="a2tgzz9vd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:nodes-cycle-duo"} {...others} />);
}

export default Component;
