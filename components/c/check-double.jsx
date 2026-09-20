import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nsq_qlb9g.css';
import '../../css/x/xovybtb3r.css';
import '../../css/q/q8b15obzk.css';
import '../../css/o/opeg25g_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nsq_qlb9g"/><path class="xovybtb3r"/><path class="q8b15obzk"/><path class="opeg25g_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:check-double"} {...others} />);
}

export default Component;
