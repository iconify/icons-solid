import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q7pva0bia.css';
import '../../css/t/t826j2bwa.css';
import '../../css/a/a-n0l-b-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q7pva0bia"/><path class="t826j2bwa wm-shadow"/><path class="a-n0l-b-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:navigation-2-engrave"} {...others} />);
}

export default Component;
