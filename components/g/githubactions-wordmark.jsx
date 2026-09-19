import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbxmv5lgw.css';
import '../../css/l/lbz_afxlg.css';
import '../../css/g/gc5bzfbjb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dbxmv5lgw"/><path class="lbz_afxlg"/><path class="gc5bzfbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:githubactions-wordmark"} {...others} />);
}

export default Component;
