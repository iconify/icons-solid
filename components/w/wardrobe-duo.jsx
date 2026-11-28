import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la-2whaud.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n7r7azbdm.css';
import '../../css/a/af2wjebts.css';
import '../../css/w/w8cjkffza.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="la-2whaud secondary"/><g class="dt0cm9dhy primary"><path class="n7r7azbdm"/><path class="af2wjebts"/><path class="w8cjkffza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wardrobe-duo"} {...others} />);
}

export default Component;
