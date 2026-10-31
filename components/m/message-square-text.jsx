import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ofj54sh_v.css';
import '../../css/f/flcymhbrn.css';
import '../../css/i/i02piz81c.css';
import '../../css/u/uheoti2vc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ofj54sh_v wm-shadow"/><path class="flcymhbrn wm-shadow"/><path class="i02piz81c"/><path class="uheoti2vc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:message-square-text"} {...others} />);
}

export default Component;
