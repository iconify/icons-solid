import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bo7q1nb0d.css';
import '../../css/a/akja1lbui.css';
import '../../css/s/s85ftew3c.css';
import '../../css/s/skpvdybaq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bo7q1nb0d wm-shadow"/><path class="akja1lbui wm-shadow"/><path class="s85ftew3c"/><path class="skpvdybaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:paperclip"} {...others} />);
}

export default Component;
