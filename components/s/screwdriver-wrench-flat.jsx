import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tm1lnyblt.css';
import '../../css/z/zydpfe68l.css';
import '../../css/w/wzyv2vb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="tm1lnyblt"/><path class="zydpfe68l"/><path class="wzyv2vb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:screwdriver-wrench-flat"} {...others} />);
}

export default Component;
