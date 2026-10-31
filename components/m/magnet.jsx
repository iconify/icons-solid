import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w7qbk-blj.css';
import '../../css/c/ccp-xwqss.css';
import '../../css/y/yk72itc7j.css';
import '../../css/o/odprduh0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w7qbk-blj wm-shadow"/><path class="ccp-xwqss wm-shadow"/><path class="yk72itc7j"/><path class="odprduh0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:magnet"} {...others} />);
}

export default Component;
