import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v_by4ybpj.css';
import '../../css/a/a_b3elb4r.css';
import '../../css/i/iitjqnzjj.css';
import '../../css/w/wcute_4vd.css';
import '../../css/c/c4_wodreq.css';
import '../../css/q/qgm7aebtm.css';
import '../../css/t/t7evz7b9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v_by4ybpj"/><path class="a_b3elb4r"/><path class="iitjqnzjj wm-shine"/><path class="wcute_4vd wm-k"/><path class="c4_wodreq wm-a"/><path class="qgm7aebtm"/><path class="t7evz7b9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:thermometer"} {...others} />);
}

export default Component;
