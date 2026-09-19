import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7qcm_bbj.css';
import '../../css/d/ddqxzbcmd.css';
import '../../css/j/j-4d3bcgn.css';
import '../../css/r/rac8vkbxx.css';
import '../../css/h/hixjmmblv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t7qcm_bbj"/><path class="ddqxzbcmd"/><path class="j-4d3bcgn"/><path class="rac8vkbxx"/><circle class="hixjmmblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:clipboard"} {...others} />);
}

export default Component;
