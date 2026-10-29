import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d6l1jnyly.css';
import '../../css/y/ynb_0bb6c.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/f/f1552lbol.css';
import '../../css/u/ugu995blq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="d6l1jnyly wm-deco"/><path class="wm-deco ynb_0bb6c"/><path class="o7-ag87sb wm-deco"/><path class="f1552lbol"/><path class="ugu995blq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kalash-blueprint"} {...others} />);
}

export default Component;
