import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/ltmwlr7si.css';
import '../../css/j/jxcqzgbap.css';
import '../../css/p/pxku7lbxz.css';
import '../../css/t/ti5kg_b8s.css';
import '../../css/d/dwpi1dbbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ltmwlr7si"/><path class="jxcqzgbap"/><path class="pxku7lbxz"/><path class="ti5kg_b8s"/><path class="dwpi1dbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:keyboard-wireless"} {...others} />);
}

export default Component;
