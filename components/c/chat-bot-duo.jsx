import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-m8k-57c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t275zhbkr.css';
import '../../css/v/voz2zdbvr.css';
import '../../css/s/s4f6ywbzq.css';
import '../../css/c/cgvizrltr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-m8k-57c secondary"/><g class="dt0cm9dhy primary"><path class="t275zhbkr"/><path class="voz2zdbvr"/><path class="s4f6ywbzq"/><path class="cgvizrltr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chat-bot-duo"} {...others} />);
}

export default Component;
