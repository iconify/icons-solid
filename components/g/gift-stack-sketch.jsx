import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tbzm2gqcw.css';
import '../../css/w/w_jb_zbpr.css';
import '../../css/l/lr0oojb-x.css';
import '../../css/s/sciz89bxj.css';
import '../../css/v/v8bcv9g6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tbzm2gqcw"/><path class="w_jb_zbpr wm-k"/><path class="lr0oojb-x wm-a"/><path class="sciz89bxj wm-k"/><path class="v8bcv9g6a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gift-stack-sketch"} {...others} />);
}

export default Component;
