import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6b1xmm5x.css';
import '../../css/k/k8m_iib6q.css';
import '../../css/i/icdv6x8px.css';
import '../../css/i/iat61e55f.css';
import '../../css/m/mdqrbabwe.css';
import '../../css/f/fodkcftvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j6b1xmm5x"/><path class="k8m_iib6q"/><path class="icdv6x8px"/><path class="iat61e55f"/><path class="mdqrbabwe"/><path class="fodkcftvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:id-picture"} {...others} />);
}

export default Component;
