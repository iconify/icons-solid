import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei5ascb-z.css';
import '../../css/p/p479tuxrf.css';
import '../../css/h/hwwuzvdfe.css';
import '../../css/a/aiuqk3wdb.css';
import '../../css/p/ptra1_xhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ei5ascb-z"/><path class="p479tuxrf"/><path class="hwwuzvdfe"/><path class="aiuqk3wdb"/><path class="ptra1_xhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monitor-graph-line"} {...others} />);
}

export default Component;
