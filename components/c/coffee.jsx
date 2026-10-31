import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m8zv555nq.css';
import '../../css/a/akdv00bxe.css';
import '../../css/r/rilhjbure.css';
import '../../css/l/lpvdy8b7o.css';
import '../../css/g/g9g2iobxb.css';
import '../../css/p/pxgkxs6mo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m8zv555nq"/><path class="akdv00bxe"/><path class="rilhjbure wm-shine"/><path class="lpvdy8b7o wm-k"/><path class="g9g2iobxb wm-a"/><path class="pxgkxs6mo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:coffee"} {...others} />);
}

export default Component;
