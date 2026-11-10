import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qvo4m5btw.css';
import '../../css/r/rnhmxj7xi.css';
import '../../css/c/cotel_nkl.css';
import '../../css/w/wuda5lbyl.css';
import '../../css/x/xtrg9abmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="qvo4m5btw"/><path class="rnhmxj7xi"/><path class="cotel_nkl"/><path class="wuda5lbyl"/><path class="xtrg9abmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:board-menu"} {...others} />);
}

export default Component;
