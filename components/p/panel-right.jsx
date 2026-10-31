import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jsm0pzpjg.css';
import '../../css/m/m23iwwwwq.css';
import '../../css/w/wwsorabjx.css';
import '../../css/d/dtfvnybpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jsm0pzpjg wm-shadow"/><path class="m23iwwwwq wm-shadow"/><path class="wwsorabjx"/><path class="dtfvnybpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:panel-right"} {...others} />);
}

export default Component;
