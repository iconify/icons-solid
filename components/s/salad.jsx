import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/aedlnnets.css';
import '../../css/c/czjj17bjy.css';
import '../../css/j/j3u2o5jmd.css';
import '../../css/f/fc3pzvb-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="aedlnnets"/><path class="czjj17bjy wm-a"/><circle class="j3u2o5jmd wm-a"/><path class="fc3pzvb-o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:salad"} {...others} />);
}

export default Component;
