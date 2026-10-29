import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/ftqr-5k8n.css';
import '../../css/o/on7c82d3r.css';
import '../../css/c/c95t1mbzm.css';
import '../../css/v/v8-uzepcp.css';
import '../../css/y/y87qwabfm.css';
import '../../css/b/bclphnb4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ftqr-5k8n wm-deco"/><path class="on7c82d3r wm-deco"/><path class="c95t1mbzm wm-deco"/><path class="v8-uzepcp"/><path class="y87qwabfm"/><path class="bclphnb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-unicorn-blueprint"} {...others} />);
}

export default Component;
