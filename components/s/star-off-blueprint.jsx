import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mgjd0mq0y.css';
import '../../css/p/plzywsbvi.css';
import '../../css/j/janyg3b3l.css';
import '../../css/o/oym_uikuq.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/j/jh3r71blx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="mgjd0mq0y wm-deco"/><path class="plzywsbvi wm-deco"/><path class="janyg3b3l wm-deco"/><path class="oym_uikuq wm-k"/><path class="qr4ochb5c wm-s"/><path class="jh3r71blx wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:star-off-blueprint"} {...others} />);
}

export default Component;
