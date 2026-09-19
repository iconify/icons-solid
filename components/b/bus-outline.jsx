import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ygcr4ibxb.css';
import '../../css/q/qgieelblm.css';
import '../../css/y/yx4lsi7ye.css';
import '../../css/e/e-26mxbxv.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ygcr4ibxb"/><path class="qgieelblm"/><path class="yx4lsi7ye"/><path class="e-26mxbxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bus-outline"} {...others} />);
}

export default Component;
