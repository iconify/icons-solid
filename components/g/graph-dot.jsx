import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dr0hd2bka.css';
import '../../css/k/kvrvqegri.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="dr0hd2bka"/><path class="kvrvqegri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:graph-dot"} {...others} />);
}

export default Component;
