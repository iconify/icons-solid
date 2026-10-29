import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xz_a0r57n.css';
import '../../css/a/adscdonuu.css';
import '../../css/s/s6sw282lt.css';
import '../../css/o/o25cc4zjh.css';
import '../../css/e/erfnpl34n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xz_a0r57n"/><path class="adscdonuu wm-a"/><path class="s6sw282lt wm-shadow"/><path class="o25cc4zjh wm-k"/><path class="erfnpl34n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stocking-engrave"} {...others} />);
}

export default Component;
