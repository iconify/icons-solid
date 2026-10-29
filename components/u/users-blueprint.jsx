import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e9i5xxitp.css';
import '../../css/b/bleplfymj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/q/qgy6jma8g.css';
import '../../css/m/mjjaukvra.css';
import '../../css/n/n3800iaop.css';
import '../../css/t/tqj8uzelo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="e9i5xxitp wm-deco"/><path class="bleplfymj wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="qgy6jma8g wm-k"/><path class="mjjaukvra wm-a"/><path class="n3800iaop wm-k"/><path class="tqj8uzelo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:users-blueprint"} {...others} />);
}

export default Component;
