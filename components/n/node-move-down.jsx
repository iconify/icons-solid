import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nf8asibfv.css';
import '../../css/v/v_u7lbc8p.css';
import '../../css/i/iqbu_qwxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nf8asibfv"/><path class="v_u7lbc8p"/><path class="iqbu_qwxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:node-move-down"} {...others} />);
}

export default Component;
