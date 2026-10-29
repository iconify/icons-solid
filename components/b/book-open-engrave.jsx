import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a3tfw3zfh.css';
import '../../css/z/zntvhn8qg.css';
import '../../css/p/pk03-9beu.css';
import '../../css/c/ctjcreb2q.css';
import '../../css/j/janj24-ql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a3tfw3zfh wm-k"/><path class="wm-a zntvhn8qg"/><path class="pk03-9beu wm-shadow"/><path class="ctjcreb2q wm-k"/><path class="janj24-ql wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-open-engrave"} {...others} />);
}

export default Component;
