import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k5l_zwbaq.css';
import '../../css/m/myrub2tat.css';
import '../../css/q/qvg2egx2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="k5l_zwbaq"/><path vector-effect="non-scaling-stroke" class="myrub2tat"/><path vector-effect="non-scaling-stroke" class="qvg2egx2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:cog"} {...others} />);
}

export default Component;
