import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_5oz6biu.css';
import '../../css/y/yxdhtj91r.css';
import '../../css/r/rm18f4bee.css';
import '../../css/d/dtzg4jbdg.css';
import '../../css/l/lsdii6bww.css';
import '../../css/y/y8z4p5bfl.css';
import '../../css/x/xnqdvwq5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_5oz6biu wm-k"/><path class="wm-k yxdhtj91r"/><path class="rm18f4bee wm-k"/><path class="dtzg4jbdg wm-a"/><path class="lsdii6bww wm-a"/><path class="wm-a y8z4p5bfl"/><path class="wm-a xnqdvwq5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:webhook"} {...others} />);
}

export default Component;
