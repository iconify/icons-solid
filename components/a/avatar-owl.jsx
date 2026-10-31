import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zjho8wbzs.css';
import '../../css/e/e9zk6vbgi.css';
import '../../css/u/ul0opub_j.css';
import '../../css/q/qxku6vb8l.css';
import '../../css/v/vnkq9-bnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zjho8wbzs"/><path class="e9zk6vbgi wm-shine"/><path class="ul0opub_j wm-k"/><path class="qxku6vb8l wm-a"/><path class="vnkq9-bnm wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-owl"} {...others} />);
}

export default Component;
