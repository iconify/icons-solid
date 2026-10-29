import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugtk8rpvz.css';
import '../../css/r/rdtj9bbgj.css';
import '../../css/l/lakfadben.css';
import '../../css/l/ls-gnnb-j.css';
import '../../css/q/qa6yhxb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ugtk8rpvz wm-k"/><path class="rdtj9bbgj wm-k"/><path class="lakfadben wm-k"/><path class="ls-gnnb-j wm-shine"/><path class="qa6yhxb7c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:message-circle-more"} {...others} />);
}

export default Component;
