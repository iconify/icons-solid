import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxplxq96s.css';
import '../../css/o/o_yio2mgh.css';
import '../../css/w/wkgwq8b-u.css';
import '../../css/n/nzasycbne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xxplxq96s"/><path class="o_yio2mgh wm-shadow"/><path class="wkgwq8b-u"/><path class="nzasycbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:list-todo"} {...others} />);
}

export default Component;
