import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uboz-naet.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ikmo83bou.css';
import '../../css/z/zjw-t-1jy.css';
import '../../css/w/w5vckhkdx.css';
import '../../css/t/t6kh4q3gb.css';
import '../../css/c/cz6ccv71b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary uboz-naet"/><g class="dt0cm9dhy primary"><path class="ikmo83bou"/><path class="zjw-t-1jy"/><path class="w5vckhkdx"/><path class="t6kh4q3gb"/><path class="cz6ccv71b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bot-frown-duo"} {...others} />);
}

export default Component;
