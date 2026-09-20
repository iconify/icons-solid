import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwj6f7u_l.css';
import '../../css/t/t0m985t7g.css';
import '../../css/l/lpguzdbpl.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/y/y_379bc7e.css';
import '../../css/y/yjgtr0bfm.css';
import '../../css/x/xy1_0ioir.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cwj6f7u_l"/><path class="t0m985t7g"/><path class="lpguzdbpl"/><g class="doj9dq_jg"><path class="y_379bc7e"/><path class="yjgtr0bfm"/><path class="xy1_0ioir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:volcano"} {...others} />);
}

export default Component;
