import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bsh7occcx.css';
import '../../css/d/dv-f5_bfs.css';
import '../../css/i/iedi-yb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bsh7occcx wm-shadow"/><path class="dv-f5_bfs wm-shadow"/><path class="iedi-yb1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chart-column-stacked"} {...others} />);
}

export default Component;
