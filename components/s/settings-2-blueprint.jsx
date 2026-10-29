import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/w/ws6itibsn.css';
import '../../css/m/msx4mwb6m.css';
import '../../css/z/z8g64ybha.css';
import '../../css/l/lfoplq4du.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="wm-k ws6itibsn"/><circle class="msx4mwb6m wm-a"/><circle class="wm-a z8g64ybha"/><path class="lfoplq4du wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:settings-2-blueprint"} {...others} />);
}

export default Component;
