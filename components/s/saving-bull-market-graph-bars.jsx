import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nht91tbvp.css';
import '../../css/z/zk_sql93n.css';
import '../../css/u/u2f-v0b3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="nht91tbvp"/><path class="zk_sql93n"/><path class="u2f-v0b3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:saving-bull-market-graph-bars"} {...others} />);
}

export default Component;
