import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvwrcqbgi.css';
import '../../css/y/yx387rbsc.css';
import '../../css/x/xaw-yebiu.css';
import '../../css/q/q_pzcfghs.css';
import '../../css/y/y7nvc_bze.css';
import '../../css/l/lsaiprb4y.css';
import '../../css/w/w5i_3chrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yvwrcqbgi"/><path class="yx387rbsc"/><path class="xaw-yebiu"/><path class="q_pzcfghs"/><path class="y7nvc_bze"/><path class="lsaiprb4y"/><path class="w5i_3chrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:object-ungroup"} {...others} />);
}

export default Component;
