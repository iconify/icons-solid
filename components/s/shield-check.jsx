import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nawog-beq.css';
import '../../css/x/xdzdmwwnt.css';
import '../../css/s/s5qhm57se.css';
import '../../css/s/sx40hko8u.css';
import '../../css/w/wzs2ddcme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nawog-beq wm-k"/><path class="wm-k xdzdmwwnt"/><path class="s5qhm57se wm-k"/><path class="sx40hko8u wm-shine"/><path class="wm-a wzs2ddcme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:shield-check"} {...others} />);
}

export default Component;
