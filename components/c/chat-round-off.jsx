import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/w/wavf4e.css';
import '../../css/t/ttlnxo.css';
import '../../css/o/oxx-om.css';
import '../../css/t/tbv09e.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG60iS9dpY"><path class="c5xdmn wavf4e"/><path class="ttlnxo"/><path class="c5xdmn oxx-om tbv09e"/></mask></defs><path mask="url(#SVG60iS9dpY)" class="botfzx"/><path class="c5xdmn gd_4-q tbv09e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-round-off"} {...others} />);
}

export default Component;
