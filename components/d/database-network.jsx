import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbcqtl4ml.css';
import '../../css/f/f16pl8bxs.css';
import '../../css/t/txq_e2tvp.css';
import '../../css/d/dp4s2zb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rbcqtl4ml"/><path class="f16pl8bxs"/><path class="txq_e2tvp"/><path class="dp4s2zb9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:database-network"} {...others} />);
}

export default Component;
