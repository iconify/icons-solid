import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/puewagr1r.css';
import '../../css/f/f5liuu3rw.css';
import '../../css/x/xoel-jbtk.css';
import '../../css/p/ptxdeh5wn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="puewagr1r"/><path class="f5liuu3rw"/><path class="xoel-jbtk"/><path class="ptxdeh5wn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:merge"} {...others} />);
}

export default Component;
