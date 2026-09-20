import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpsiiab0r.css';
import '../../css/l/lnd06abox.css';
import '../../css/w/wolzbf24z.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/i/ijlg5jubn.css';
import '../../css/e/e5ttk6j9m.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dpsiiab0r"><path class="lnd06abox"/><path class="wolzbf24z"/></g><g class="x8poo_bjf"><path class="ijlg5jubn"/><path class="e5ttk6j9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:old-key"} {...others} />);
}

export default Component;
