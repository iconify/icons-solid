import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hy89z3blm.css';
import '../../css/z/zcukp2pnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hy89z3blm"/><path class="zcukp2pnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-line-down"} {...others} />);
}

export default Component;
