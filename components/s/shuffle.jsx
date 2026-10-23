import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/v10liebgr.css';
import '../../css/l/logcqs6mm.css';
import '../../css/t/t09m1vbqo.css';
import '../../css/l/lrea_p15f.css';
import '../../css/h/hcjzbcw_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="v10liebgr"/><path class="logcqs6mm"/><path class="t09m1vbqo"/><path class="lrea_p15f"/><path class="hcjzbcw_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:shuffle"} {...others} />);
}

export default Component;
