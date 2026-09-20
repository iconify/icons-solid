import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/j/jhyph6bqw.css';
import '../../css/m/m2w35yd5p.css';
import '../../css/d/d98fgxblr.css';
import '../../css/p/pbtg_mb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="jhyph6bqw"/><path class="m2w35yd5p"/><path class="d98fgxblr"/><path class="pbtg_mb8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:satellite-dish"} {...others} />);
}

export default Component;
