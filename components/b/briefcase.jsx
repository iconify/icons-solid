import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4cr-q9sn.css';
import '../../css/w/wnvq8n4wy.css';
import '../../css/u/ut28s9tsh.css';
import '../../css/a/aca6tgsdv.css';
import '../../css/s/szvfogb4j.css';
import '../../css/a/a-_we7osn.css';
import '../../css/y/yalhvin4y.css';
import '../../css/q/qa5mlybnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l4cr-q9sn wm-k"/><path class="wm-a wnvq8n4wy"/><path class="ut28s9tsh wm-deco"/><path class="aca6tgsdv wm-k"/><path class="szvfogb4j wm-a"/><path class="a-_we7osn wm-shadow"/><path class="wm-shine yalhvin4y"/><path class="qa5mlybnj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:briefcase"} {...others} />);
}

export default Component;
