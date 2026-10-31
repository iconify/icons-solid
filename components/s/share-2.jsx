import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w4d3zqmco.css';
import '../../css/x/x7h96s6ws.css';
import '../../css/h/hn_6axb6b.css';
import '../../css/w/wndn-ybbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w4d3zqmco wm-shadow"/><path class="wm-shadow x7h96s6ws"/><path class="hn_6axb6b"/><path class="wndn-ybbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:share-2"} {...others} />);
}

export default Component;
