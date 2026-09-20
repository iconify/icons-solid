import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtwutr3uy.css';
import '../../css/s/s-_ewh-er.css';
import '../../css/c/c4eliccbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gtwutr3uy"/><path clip-rule="evenodd" class="s-_ewh-er"/><path class="c4eliccbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:notif-unread2"} {...others} />);
}

export default Component;
