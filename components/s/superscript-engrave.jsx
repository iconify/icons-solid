import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s_b4-ibdg.css';
import '../../css/l/l1o1jw0fj.css';
import '../../css/f/fs-ghbbgv.css';
import '../../css/j/jeo1kfb-t.css';
import '../../css/c/ccsoahs3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="s_b4-ibdg wm-k"/><path class="l1o1jw0fj wm-a"/><path class="fs-ghbbgv wm-shadow"/><path class="jeo1kfb-t wm-k"/><path class="ccsoahs3k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:superscript-engrave"} {...others} />);
}

export default Component;
