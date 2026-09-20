import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mw8ccub0a.css';
import '../../css/j/jzhpb3bqb.css';
import '../../css/q/q5ty2f3-s.css';
import '../../css/a/ar6oaobqo.css';
import '../../css/e/e_o28f1-b.css';
import '../../css/s/st1arvbax.css';
import '../../css/d/dgtms6b-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mw8ccub0a"/><path class="jzhpb3bqb"/><path class="q5ty2f3-s"/><path class="ar6oaobqo"/><path class="e_o28f1-b"/><circle class="st1arvbax"/><path class="dgtms6b-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-notes-broken"} {...others} />);
}

export default Component;
