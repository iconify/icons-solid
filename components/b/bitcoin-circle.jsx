import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np7z08buk.css';
import '../../css/f/f1ca565tw.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="np7z08buk"/><path class="f1ca565tw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:bitcoin-circle"} {...others} />);
}

export default Component;
