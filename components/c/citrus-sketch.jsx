import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nzo06bbex.css';
import '../../css/t/t1wbj0d5e.css';
import '../../css/i/icn4j_bqy.css';
import '../../css/a/avgg4ibne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nzo06bbex wm-k"/><path class="t1wbj0d5e wm-a"/><path class="icn4j_bqy wm-k"/><path class="avgg4ibne wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:citrus-sketch"} {...others} />);
}

export default Component;
