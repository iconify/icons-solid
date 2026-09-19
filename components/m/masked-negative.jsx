import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nikyyvbxf.css';
import '../../css/g/gq3csj2ea.css';
import '../../css/q/qxg00ja2v.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMaskedNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="nikyyvbxf"/><path class="gq3csj2ea"/><path clip-rule="evenodd" class="qxg00ja2v"/></g><defs><clipPath id="healthiconsMaskedNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:masked-negative"} {...others} />);
}

export default Component;
