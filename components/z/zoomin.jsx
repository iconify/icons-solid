import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sm3vwht4g.css';
import '../../css/y/yg-vzhbhz.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="sm3vwht4g"/><path class="yg-vzhbhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:zoomin"} {...others} />);
}

export default Component;
