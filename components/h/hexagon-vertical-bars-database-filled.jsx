import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a4opz1bbj.css';
import '../../css/g/g1fovbbcq.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="n1lsf0bnc"><path class="a4opz1bbj"/><path class="g1fovbbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:hexagon-vertical-bars-database-filled"} {...others} />);
}

export default Component;
