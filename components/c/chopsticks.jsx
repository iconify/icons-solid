import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qw26xdb4f.css';
import '../../css/x/x4cyfsbeh.css';
import '../../css/x/xk937qvba.css';
import '../../css/r/ruxik8b3r.css';
import '../../css/x/xe_p_iboh.css';
import '../../css/u/uwpdibbuf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qw26xdb4f wm-k"/><path class="wm-a x4cyfsbeh"/><path class="wm-deco xk937qvba"/><path class="ruxik8b3r wm-k"/><path class="wm-a xe_p_iboh"/><path class="uwpdibbuf wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:chopsticks"} {...others} />);
}

export default Component;
