import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w3xlxrjal.css';
import '../../css/a/a2by68ltf.css';
import '../../css/d/dk3bnactw.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="w3xlxrjal"/><path class="a2by68ltf"/><path class="dk3bnactw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:camera"} {...others} />);
}

export default Component;
