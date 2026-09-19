import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jqoe0xbcb.css';
import '../../css/o/ozub2v37v.css';
import '../../css/r/r3_jdpb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jqoe0xbcb"/><path class="ozub2v37v"/><path class="r3_jdpb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:graph-cured-decreasing"} {...others} />);
}

export default Component;
