import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/goe_53dyv.css';
import '../../css/i/i3vchurfh.css';
import '../../css/n/ns5q66kqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="goe_53dyv wm-k"/><path class="i3vchurfh wm-a"/><path class="ns5q66kqv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:minimize"} {...others} />);
}

export default Component;
