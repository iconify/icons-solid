import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r1k6ffbcm.css';
import '../../css/m/m9rcm8bne.css';
import '../../css/g/gzpo1u_la.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="r1k6ffbcm"/><path class="m9rcm8bne"/><path class="gzpo1u_la"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-network-spark-flat"} {...others} />);
}

export default Component;
