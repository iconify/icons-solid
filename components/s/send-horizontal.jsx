import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6nhne24d.css';
import '../../css/t/treppetfe.css';
import '../../css/b/bbtfl131z.css';
import '../../css/x/xx992xnpi.css';
import '../../css/w/w38maxb4f.css';
import '../../css/n/n-9huqejf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d6nhne24d wm-k"/><path class="treppetfe wm-k"/><path class="bbtfl131z wm-k"/><path class="wm-k xx992xnpi"/><path class="w38maxb4f wm-shine"/><path class="n-9huqejf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:send-horizontal"} {...others} />);
}

export default Component;
