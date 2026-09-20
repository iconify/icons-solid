import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c_s47-b6v.css';
import '../../css/u/uqydko1ud.css';
import '../../css/g/gw93tkjcm.css';
import '../../css/r/ru72i24ec.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c_s47-b6v"/><path class="uqydko1ud"/><path class="gw93tkjcm"/><path class="ru72i24ec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:camera-tripod"} {...others} />);
}

export default Component;
