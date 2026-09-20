import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bk_r3rbbz.css';
import '../../css/d/dyevr4boi.css';
import '../../css/q/qfwattbuf.css';
import '../../css/i/ikzht7pab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bk_r3rbbz"/><path class="dyevr4boi"/><path clip-rule="evenodd" class="qfwattbuf"/><path class="ikzht7pab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:file-smile"} {...others} />);
}

export default Component;
