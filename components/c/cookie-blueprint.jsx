import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xj-07jblj.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/x/x_q-cg9hr.css';
import '../../css/j/jexdf6blp.css';
import '../../css/w/ws0qr8bxn.css';
import '../../css/e/e65c6cc3n.css';
import '../../css/p/prkrb0kje.css';
import '../../css/o/o5gja2afv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xj-07jblj"/><path class="o7-ag87sb wm-deco"/><path class="wm-k x_q-cg9hr"/><circle class="jexdf6blp wm-a"/><circle class="wm-a ws0qr8bxn"/><circle class="e65c6cc3n wm-a"/><circle class="prkrb0kje wm-a"/><circle class="o5gja2afv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cookie-blueprint"} {...others} />);
}

export default Component;
