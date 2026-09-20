import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n2dz4-9sb.css';
import '../../css/p/pyjbxobzr.css';
import '../../css/o/o26jfqrru.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="n2dz4-9sb"/><path class="pyjbxobzr"/><path class="o26jfqrru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:binoculars"} {...others} />);
}

export default Component;
