import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fpcuoqb7g.css';
import '../../css/v/v7npj_bxk.css';
import '../../css/x/xmzujebsj.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/i/i913gobhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fpcuoqb7g wm-k"/><path class="v7npj_bxk wm-a"/><path class="wm-shadow xmzujebsj"/><path class="nn2sdrbun wm-k"/><path class="i913gobhf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:battery-engrave"} {...others} />);
}

export default Component;
