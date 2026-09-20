import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0382plgr.css';
import '../../css/f/f59u7ybax.css';
import '../../css/p/pb7-4j_bc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i0382plgr"/><path clip-rule="evenodd" class="f59u7ybax"/><path class="pb7-4j_bc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:bus"} {...others} />);
}

export default Component;
