import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbnfgxb3k.css';
import '../../css/v/vxm25hw6u.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/xu3_pcc5u.css';
import '../../css/q/qrzrue64i.css';
import '../../css/v/v0wnzy-1e.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wbnfgxb3k"/><path class="vxm25hw6u"/><g class="ij2x_72vy"><path class="xu3_pcc5u"/><path class="qrzrue64i"/><path class="v0wnzy-1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hot-dog"} {...others} />);
}

export default Component;
