import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/u/ub3cl0bqb.css';
import '../../css/z/zk-lxac-n.css';
import '../../css/l/lts3lgeai.css';
import '../../css/c/cyysvkbxs.css';
import '../../css/v/v5g2m4bya.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="ub3cl0bqb"/><path class="zk-lxac-n"/><path class="lts3lgeai"/><path class="cyysvkbxs"/><path class="v5g2m4bya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:mailbox-2-duo"} {...others} />);
}

export default Component;
