import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b12cklbwn.css';
import '../../css/g/gbb09dkiw.css';
import '../../css/q/q6_dl9byv.css';
import '../../css/e/e8ww8gedj.css';
import '../../css/s/smiljabpc.css';
import '../../css/n/ntyjftbby.css';
import '../../css/s/svhxd3boh.css';
import '../../css/b/bthd24b4i.css';
import '../../css/o/oji-pf87i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="b12cklbwn wm-shadow"/><path class="gbb09dkiw"/><path class="q6_dl9byv"/><path class="e8ww8gedj"/><path class="smiljabpc wm-shine"/><path class="ntyjftbby wm-s"/><path class="svhxd3boh wm-s"/><path class="bthd24b4i wm-s"/><path class="oji-pf87i wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:database-backup"} {...others} />);
}

export default Component;
