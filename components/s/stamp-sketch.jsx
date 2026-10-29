import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jhpoz2d-t.css';
import '../../css/e/ep698ubgt.css';
import '../../css/d/dt0487mof.css';
import '../../css/w/wkrks_5kf.css';
import '../../css/f/fcd11vhvw.css';
import '../../css/n/n206g-b_y.css';
import '../../css/c/cklk7kh8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jhpoz2d-t"/><path class="ep698ubgt wm-k"/><path class="dt0487mof wm-a"/><path class="wkrks_5kf wm-s"/><path class="fcd11vhvw wm-k"/><path class="n206g-b_y wm-a"/><path class="cklk7kh8o wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stamp-sketch"} {...others} />);
}

export default Component;
