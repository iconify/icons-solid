import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h8mre2b4f.css';
import '../../css/m/mk8p-nb8p.css';
import '../../css/s/s_r6rqblh.css';
import '../../css/q/q_dmsoc5x.css';
import '../../css/x/xv1vn-gvd.css';
import '../../css/h/he933suek.css';
import '../../css/x/x2s1c9iwu.css';
import '../../css/b/bjhl1jb1r.css';
import '../../css/s/ssjkkebba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="h8mre2b4f wm-shadow"/><path class="mk8p-nb8p wm-s"/><path class="s_r6rqblh wm-shadow"/><path class="q_dmsoc5x"/><path class="xv1vn-gvd"/><path class="he933suek"/><path class="wm-s x2s1c9iwu"/><path class="bjhl1jb1r wm-s"/><path class="ssjkkebba wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:image-plus"} {...others} />);
}

export default Component;
