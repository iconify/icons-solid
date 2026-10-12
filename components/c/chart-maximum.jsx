import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zcukp2pnt.css';
import '../../css/o/otz5mibdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zcukp2pnt"/><path class="otz5mibdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-maximum"} {...others} />);
}

export default Component;
