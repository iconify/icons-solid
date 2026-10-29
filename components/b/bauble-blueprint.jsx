import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sfvl1ubyd.css';
import '../../css/b/bnfk6lbbp.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/x/x4e1woonj.css';
import '../../css/i/ip7h18bdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sfvl1ubyd wm-deco"/><path class="bnfk6lbbp wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="wm-k x4e1woonj"/><path class="ip7h18bdm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bauble-blueprint"} {...others} />);
}

export default Component;
