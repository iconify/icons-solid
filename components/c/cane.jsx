import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fivsqtb8r.css';
import '../../css/n/n9mytcbcc.css';
import '../../css/g/g23qkdbdy.css';
import '../../css/t/tfxf1zbvn.css';
import '../../css/i/ixd96fbof.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fivsqtb8r"/><path class="n9mytcbcc"/><path class="g23qkdbdy"/><path class="tfxf1zbvn"/><path class="ixd96fbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cane"} {...others} />);
}

export default Component;
