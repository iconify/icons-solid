import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e06evw1-w.css';
import '../../css/g/gu0phpbye.css';
import '../../css/o/oj_fzxb-a.css';
import '../../css/x/x4639o9tv.css';
import '../../css/c/c82oayb2j.css';
import '../../css/y/yatyg0v9y.css';
import '../../css/y/yrltrgtcf.css';
import '../../css/q/qz9z-gq3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e06evw1-w wm-k"/><path class="gu0phpbye wm-a"/><path class="oj_fzxb-a wm-shadow"/><path class="wm-k x4639o9tv"/><path class="c82oayb2j wm-k"/><path class="wm-a yatyg0v9y"/><path class="wm-k yrltrgtcf"/><path class="qz9z-gq3n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-compare-engrave"} {...others} />);
}

export default Component;
