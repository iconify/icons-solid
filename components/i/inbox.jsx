import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tmoj4cc4h.css';
import '../../css/b/bprii-m3g.css';
import '../../css/j/jrwzg2_ja.css';
import '../../css/l/lvdkhbcxc.css';
import '../../css/n/nz2flvb6v.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tmoj4cc4h wm-shadow"/><path class="bprii-m3g"/><path class="jrwzg2_ja"/><path class="lvdkhbcxc"/><path class="nz2flvb6v wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:inbox"} {...others} />);
}

export default Component;
