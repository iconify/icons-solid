import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o__p3qu_u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nycrbqbau.css';
import '../../css/x/xmwe5fa4e.css';
import '../../css/p/pek5k1b2v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o__p3qu_u secondary"/><g class="dt0cm9dhy primary"><path class="nycrbqbau"/><path class="xmwe5fa4e"/><path class="pek5k1b2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-mail-duo"} {...others} />);
}

export default Component;
