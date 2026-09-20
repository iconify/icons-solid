import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lnvrwachm.css';
import '../../css/x/xva1mxy4q.css';
import '../../css/p/ptipnnblw.css';
import '../../css/i/i6qzlp6eu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lnvrwachm"/><path class="xva1mxy4q"/><path class="ptipnnblw"/><path class="i6qzlp6eu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bank-note-2"} {...others} />);
}

export default Component;
