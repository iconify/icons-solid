import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/h/hz77_cbyt.css';
import '../../css/q/qnzv3xb_d.css';
import '../../css/c/cwlw_lbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="hz77_cbyt"/><path class="qnzv3xb_d"/><path class="cwlw_lbhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:analytics-net"} {...others} />);
}

export default Component;
