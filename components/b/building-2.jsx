import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nsc8n_qhv.css';
import '../../css/i/i7ltd3zon.css';
import '../../css/i/i5i4-nvsg.css';
import '../../css/p/paoe-2b3k.css';
import '../../css/t/tmoy4jbhh.css';
import '../../css/n/n2nbit7uu.css';
import '../../css/w/wibjf5b3i.css';
import '../../css/q/qwflr6ehy.css';
import '../../css/i/i3s68uu7h.css';
import '../../css/n/np51uo5ab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nsc8n_qhv wm-k"/><path class="i7ltd3zon wm-k"/><path class="i5i4-nvsg wm-k"/><path class="paoe-2b3k wm-k"/><path class="tmoy4jbhh wm-shine"/><path class="n2nbit7uu wm-a"/><path class="wibjf5b3i wm-a"/><path class="qwflr6ehy wm-a"/><path class="i3s68uu7h wm-k"/><path class="np51uo5ab wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:building-2"} {...others} />);
}

export default Component;
