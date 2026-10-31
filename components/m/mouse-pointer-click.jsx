import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ydu6i3b1c.css';
import '../../css/q/q8nqxnf2b.css';
import '../../css/h/heg0hjblo.css';
import '../../css/n/nyyaa3u0w.css';
import '../../css/p/p4ra5frnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow ydu6i3b1c"/><path class="q8nqxnf2b wm-shadow"/><path class="heg0hjblo"/><path class="nyyaa3u0w"/><path class="p4ra5frnv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mouse-pointer-click"} {...others} />);
}

export default Component;
