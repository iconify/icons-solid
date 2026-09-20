import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/z/z373du9bh.css';
import '../../css/e/eyou9rgfn.css';
import '../../css/j/jz07vobep.css';
import '../../css/h/hohob5bwm.css';
import '../../css/z/zpntdtg1s.css';
import '../../css/w/w1y5f9bfl.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="z373du9bh"/><path class="eyou9rgfn"/><path class="jz07vobep"/><path class="hohob5bwm"/><path class="zpntdtg1s"/><path class="w1y5f9bfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:ipfs-dark"} {...others} />);
}

export default Component;
