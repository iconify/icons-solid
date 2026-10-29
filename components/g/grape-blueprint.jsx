import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bbfu44bql.css';
import '../../css/j/jk7r1z21b.css';
import '../../css/e/enkc8mbld.css';
import '../../css/r/rmi2m3b9i.css';
import '../../css/l/lssc9-1xp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bbfu44bql wm-deco"/><path class="jk7r1z21b wm-deco"/><path class="enkc8mbld wm-deco"/><path class="rmi2m3b9i wm-k"/><path class="lssc9-1xp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:grape-blueprint"} {...others} />);
}

export default Component;
