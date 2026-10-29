import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/ne_breh1b.css';
import '../../css/d/dc_tsib8a.css';
import '../../css/p/pvryvs9gz.css';
import '../../css/z/zqt9u5oey.css';
import '../../css/o/ookr0gbko.css';
import '../../css/v/v9ikdsbiu.css';
import '../../css/z/zcm7bbbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ne_breh1b wm-deco"/><path class="dc_tsib8a wm-deco"/><path class="pvryvs9gz wm-deco"/><path class="wm-k zqt9u5oey"/><path class="ookr0gbko wm-a"/><path class="v9ikdsbiu wm-k"/><path class="wm-a zcm7bbbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pilcrow-blueprint"} {...others} />);
}

export default Component;
