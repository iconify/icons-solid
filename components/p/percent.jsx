import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/weqpodbxu.css';
import '../../css/s/sf2y53f_x.css';
import '../../css/k/k4j9aabpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="weqpodbxu"/><path class="sf2y53f_x"/><path class="k4j9aabpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:percent"} {...others} />);
}

export default Component;
