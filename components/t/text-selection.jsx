import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ap3-q4b9r.css';
import '../../css/q/qrfdry-dg.css';
import '../../css/p/piv1leb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ap3-q4b9r"/><path class="qrfdry-dg"/><path class="piv1leb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-selection"} {...others} />);
}

export default Component;
