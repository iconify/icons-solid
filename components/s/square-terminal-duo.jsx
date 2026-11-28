import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifjhrvbty.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lk2gmgbqk.css';
import '../../css/k/kb53_yb0k.css';
import '../../css/n/n2j9rebrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifjhrvbty secondary"/><g class="dt0cm9dhy primary"><path class="lk2gmgbqk"/><path class="kb53_yb0k"/><path class="n2j9rebrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-terminal-duo"} {...others} />);
}

export default Component;
