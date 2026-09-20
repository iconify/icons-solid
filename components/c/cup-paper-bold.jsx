import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hgg0-ubhy.css';
import '../../css/p/p03ed07tq.css';
import '../../css/w/wc9e0xbjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hgg0-ubhy"/><path class="p03ed07tq"/><path class="wc9e0xbjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-paper-bold"} {...others} />);
}

export default Component;
