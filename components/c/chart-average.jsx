import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zcukp2pnt.css';
import '../../css/e/e8lxdcjib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zcukp2pnt"/><path class="e8lxdcjib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-average"} {...others} />);
}

export default Component;
