import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jsuh66bhd.css';
import '../../css/u/uiva24bir.css';
import '../../css/o/ontfg700s.css';
import '../../css/g/ghusg13xw.css';
import '../../css/x/xnnn3ac7j.css';
import '../../css/i/i8gbppbjw.css';
import '../../css/u/u1l4hlbza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jsuh66bhd"/><path class="uiva24bir"/><path class="ontfg700s wm-shine"/><path class="ghusg13xw wm-k"/><path class="wm-a xnnn3ac7j"/><path class="i8gbppbjw"/><path class="u1l4hlbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:volume"} {...others} />);
}

export default Component;
