import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj4n3dbie.css';
import '../../css/f/fvsx_0bjj.css';
import '../../css/k/kr5g23bjh.css';
import '../../css/l/lycwtjeca.css';
import '../../css/d/dnp0bgwhz.css';
import '../../css/l/lt0hjtbcf.css';
import '../../css/u/u40soubkt.css';
import '../../css/j/jjt_jtimh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gj4n3dbie wm-shadow"/><path class="fvsx_0bjj wm-k"/><path class="kr5g23bjh wm-k"/><path class="lycwtjeca wm-k"/><path class="dnp0bgwhz wm-k"/><path class="lt0hjtbcf wm-shine"/><path class="u40soubkt wm-k"/><path class="jjt_jtimh wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:door-closed"} {...others} />);
}

export default Component;
