import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhllwpbaa.css';
import '../../css/g/gyii40b7c.css';
import '../../css/c/cw7_ejbum.css';
import '../../css/g/gbea3ozco.css';
import '../../css/a/avjyovbwf.css';
import '../../css/p/p2b0rfbjt.css';
import '../../css/p/p4z3j6bmt.css';
import '../../css/d/d6ed8ebnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yhllwpbaa"/><path class="gyii40b7c wm-deco"/><path class="cw7_ejbum wm-k"/><path class="gbea3ozco wm-k"/><path class="avjyovbwf wm-shadow"/><path class="p2b0rfbjt wm-shine"/><path class="p4z3j6bmt wm-shine"/><path class="d6ed8ebnx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:folder-search"} {...others} />);
}

export default Component;
