import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nnsn99bzd.css';
import '../../css/j/jgw326pqz.css';
import '../../css/r/reg1o1oqx.css';
import '../../css/z/zyjmlubli.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="nnsn99bzd"/><path class="jgw326pqz"/><path class="reg1o1oqx"/><path class="zyjmlubli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:drawer-envelope"} {...others} />);
}

export default Component;
