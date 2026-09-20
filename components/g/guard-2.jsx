import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyl23qbli.css';
import '../../css/c/c6uewdbti.css';
import '../../css/i/ikhuh3bho.css';
import '../../css/i/iyg0racll.css';
import '../../css/r/rzoyltk9g.css';
import '../../css/i/irie5-bwa.css';
import '../../css/k/kc225fdlx.css';
import '../../css/t/trnmccbzp.css';
import '../../css/p/pfhifjbse.css';
import '../../css/c/c33uvcclp.css';
import '../../css/n/nfyekdbuj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uyl23qbli"/><path class="c6uewdbti"/><path class="ikhuh3bho"/><path class="iyg0racll"/><path class="rzoyltk9g"/><path class="irie5-bwa"/><path class="kc225fdlx"/><path class="trnmccbzp"/><path class="pfhifjbse"/><path class="c33uvcclp"/><path class="nfyekdbuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:guard-2"} {...others} />);
}

export default Component;
