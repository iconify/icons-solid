import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ir9ht9b-v.css';
import '../../css/h/hdxvhebms.css';
import '../../css/a/auwgl1uqb.css';
import '../../css/g/gpoksfbmt.css';
import '../../css/j/jrh4d2bio.css';
import '../../css/e/ev6msfgsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ir9ht9b-v wm-deco"/><path class="hdxvhebms wm-deco"/><path class="auwgl1uqb wm-deco"/><path class="gpoksfbmt wm-k"/><path class="jrh4d2bio wm-a"/><path class="ev6msfgsh wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:percent-blueprint"} {...others} />);
}

export default Component;
