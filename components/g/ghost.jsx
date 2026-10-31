import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecxn1oa5b.css';
import '../../css/q/q6o4jwb6z.css';
import '../../css/p/pvk5fzlsw.css';
import '../../css/r/reefzmcoq.css';
import '../../css/g/gv5gxjtpf.css';
import '../../css/g/g8qlwqb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ecxn1oa5b wm-shadow"/><path class="q6o4jwb6z"/><path class="pvk5fzlsw"/><path class="reefzmcoq"/><path class="gv5gxjtpf"/><path class="g8qlwqb9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:ghost"} {...others} />);
}

export default Component;
