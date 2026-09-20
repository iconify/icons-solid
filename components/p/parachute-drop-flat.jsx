import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pp77qjbwg.css';
import '../../css/q/qinvizbyq.css';
import '../../css/t/tkx6_bb7v.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pp77qjbwg"/><path class="qinvizbyq"/><path class="tkx6_bb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:parachute-drop-flat"} {...others} />);
}

export default Component;
