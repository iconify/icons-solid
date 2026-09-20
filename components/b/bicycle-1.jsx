import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxyv9z9mh.css';
import '../../css/t/tdbf0ac8z.css';
import '../../css/u/up7kqjfut.css';
import '../../css/p/p5vme2esg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="yxyv9z9mh"><path class="tdbf0ac8z"/><path class="up7kqjfut"/><path class="p5vme2esg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bicycle-1"} {...others} />);
}

export default Component;
