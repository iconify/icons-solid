import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lzqo3mlvs.css';
import '../../css/a/a09or3byo.css';
import '../../css/p/p7fropb0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lzqo3mlvs"/><path class="a09or3byo wm-shadow"/><path class="p7fropb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:share-engrave"} {...others} />);
}

export default Component;
