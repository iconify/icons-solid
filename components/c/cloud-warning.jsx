import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tf1q-3b2b.css';
import '../../css/l/ltaumhbcl.css';
import '../../css/b/bv825kn9y.css';
import '../../css/k/kmt8qdbvz.css';
import '../../css/o/obs4_mbkm.css';
import '../../css/r/rehu5grvf.css';
import '../../css/k/klqirnbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tf1q-3b2b"/><path class="ltaumhbcl"/><path class="bv825kn9y"/><path class="kmt8qdbvz"/><path class="obs4_mbkm"/><path class="rehu5grvf"/><path class="klqirnbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cloud-warning"} {...others} />);
}

export default Component;
