import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zttarabgz.css';
import '../../css/r/rtmca-b9p.css';
import '../../css/e/e5vhi51no.css';
import '../../css/i/ihtbtlbkl.css';
import '../../css/f/f3ydy3l6p.css';
import '../../css/v/vgsxhnmjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco zttarabgz"/><path class="rtmca-b9p wm-deco"/><path class="e5vhi51no wm-deco"/><path class="ihtbtlbkl wm-k"/><path class="f3ydy3l6p wm-a"/><path class="vgsxhnmjv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unplug-blueprint"} {...others} />);
}

export default Component;
