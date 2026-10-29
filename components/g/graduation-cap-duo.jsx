import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q_93w2hzy.css';
import '../../css/s/sx67sebev.css';
import '../../css/l/l2miw0nqo.css';
import '../../css/t/ttlc-na8v.css';
import '../../css/p/po6tsm3ou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q_93w2hzy"/><path class="sx67sebev"/><path class="l2miw0nqo wm-a"/><path class="ttlc-na8v"/><path class="po6tsm3ou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:graduation-cap-duo"} {...others} />);
}

export default Component;
