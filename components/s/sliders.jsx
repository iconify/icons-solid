import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zh9ba6b8p.css';
import '../../css/m/m47se9byi.css';
import '../../css/j/j21j_j0wt.css';
import '../../css/m/mcjdb0bzu.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zh9ba6b8p"/><path class="m47se9byi"/><path class="j21j_j0wt"/><path class="mcjdb0bzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:sliders"} {...others} />);
}

export default Component;
