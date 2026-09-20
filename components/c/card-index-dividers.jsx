import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtiqu-bms.css';
import '../../css/n/n7h6kub4u.css';
import '../../css/k/kkd92jbfi.css';
import '../../css/g/gda_6gbwj.css';
import '../../css/a/azb56ab7l.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fy7itrpsq.css';
import '../../css/a/arpjo4j3q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jtiqu-bms"/><path class="n7h6kub4u"/><path class="kkd92jbfi"/><path class="gda_6gbwj"/><path class="azb56ab7l"/><g class="jn8qy4bru"><path class="fy7itrpsq"/><path class="arpjo4j3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:card-index-dividers"} {...others} />);
}

export default Component;
