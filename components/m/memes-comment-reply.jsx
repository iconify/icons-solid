import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uqd5fgvfg.css';
import '../../css/x/x0ei-kbtp.css';
import '../../css/k/kyu9b5big.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uqd5fgvfg"/><path class="x0ei-kbtp"/><path class="kyu9b5big"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:memes-comment-reply"} {...others} />);
}

export default Component;
