import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t1l54vtmu.css';
import '../../css/b/bb6msjb5n.css';
import '../../css/c/cnx-2qbvr.css';
import '../../css/n/n-14sid9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="t1l54vtmu"/><path class="bb6msjb5n wm-k"/><path class="cnx-2qbvr wm-a"/><path class="n-14sid9z wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:swords"} {...others} />);
}

export default Component;
