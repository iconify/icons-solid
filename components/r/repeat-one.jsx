import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aqgywl1mc.css';
import '../../css/w/w31ao1ksi.css';
import '../../css/y/yk4_q2j7g.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="aqgywl1mc"/><path class="w31ao1ksi"/><path class="yk4_q2j7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:repeat-one"} {...others} />);
}

export default Component;
