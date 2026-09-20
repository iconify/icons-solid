import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xed0uxxmk.css';
import '../../css/e/eaof3obga.css';
import '../../css/y/yu-tszbdn.css';
import '../../css/v/vbpr_wbom.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xed0uxxmk"/><path class="eaof3obga"/><path class="yu-tszbdn"/><path class="vbpr_wbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-2-outline"} {...others} />);
}

export default Component;
