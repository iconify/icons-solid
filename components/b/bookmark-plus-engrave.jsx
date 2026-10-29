import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vp1dk4b7p.css';
import '../../css/n/n8q0-sbxu.css';
import '../../css/m/me3qcxbaj.css';
import '../../css/t/t_wo4ibie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vp1dk4b7p wm-k"/><path class="n8q0-sbxu wm-shadow"/><path class="me3qcxbaj wm-k"/><path class="t_wo4ibie wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bookmark-plus-engrave"} {...others} />);
}

export default Component;
