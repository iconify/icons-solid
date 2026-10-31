import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ig6238x1n.css';
import '../../css/o/ouvid8buj.css';
import '../../css/o/oerpwe-8p.css';
import '../../css/c/c-syu7b3i.css';
import '../../css/u/uxinc9x9b.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ig6238x1n"/><path class="ouvid8buj"/><path class="oerpwe-8p"/><path class="c-syu7b3i"/><path class="uxinc9x9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:intolerant-face-hand-drawn"} {...others} />);
}

export default Component;
