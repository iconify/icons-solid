import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/ksg8-enya.css';
import '../../css/f/f1eli5bnp.css';
import '../../css/z/z9s20sbln.css';
import '../../css/a/ax2wmnnmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ksg8-enya"/><path class="f1eli5bnp wm-a"/><path class="wm-k z9s20sbln"/><path class="ax2wmnnmn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-sun-sketch"} {...others} />);
}

export default Component;
