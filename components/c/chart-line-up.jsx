import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x3d3oubxt.css';
import '../../css/z/zcukp2pnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x3d3oubxt"/><path class="zcukp2pnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-line-up"} {...others} />);
}

export default Component;
