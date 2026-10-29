import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e6ropcc-d.css';
import '../../css/v/vak-z7b5k.css';
import '../../css/o/ogmfbuu8l.css';
import '../../css/j/jmkhylajy.css';
import '../../css/t/tfiky1b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="e6ropcc-d wm-deco"/><path class="vak-z7b5k wm-deco"/><path class="ogmfbuu8l wm-k"/><path class="jmkhylajy wm-a"/><path class="tfiky1b5f wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-cursor-blueprint"} {...others} />);
}

export default Component;
