import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cd3xd3bkv.css';
import '../../css/o/ojbzam8ek.css';
import '../../css/f/frsup1bzk.css';
import '../../css/n/n5a7qlyhu.css';
import '../../css/l/lisx4xbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cd3xd3bkv"/><path class="ojbzam8ek wm-shine"/><path class="frsup1bzk wm-k"/><path class="n5a7qlyhu wm-a"/><path class="lisx4xbvx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:router"} {...others} />);
}

export default Component;
