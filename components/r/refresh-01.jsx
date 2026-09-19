import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jvgw14sbm.css';
import '../../css/d/d7rkzfbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jvgw14sbm"/><path class="d7rkzfbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:refresh-01"} {...others} />);
}

export default Component;
