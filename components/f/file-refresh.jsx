import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t08m_r21d.css';
import '../../css/u/un4utc-kb.css';
import '../../css/w/wlhhfxh0x.css';
import '../../css/c/crtg3b41z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t08m_r21d"/><path class="un4utc-kb"/><path class="wlhhfxh0x"/><path class="crtg3b41z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-refresh"} {...others} />);
}

export default Component;
