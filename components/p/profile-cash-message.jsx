import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deu6t_b8s.css';
import '../../css/f/fb6n8p4ot.css';
import '../../css/b/bf3ay5bfs.css';
import '../../css/w/wwm3y8b0t.css';
import '../../css/p/p-ej38ins.css';
import '../../css/y/yf-3-9b9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="deu6t_b8s"/><path class="fb6n8p4ot"/><path class="bf3ay5bfs"/><path class="wwm3y8b0t"/><path class="p-ej38ins"/><path class="yf-3-9b9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:profile-cash-message"} {...others} />);
}

export default Component;
