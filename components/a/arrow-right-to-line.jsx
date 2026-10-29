import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpzypub3s.css';
import '../../css/g/gpznrcqtq.css';
import '../../css/q/qda9p6ajk.css';
import '../../css/q/q6e7pfbwa.css';
import '../../css/g/gsr7a-biu.css';
import '../../css/o/o9yoc7b5m.css';
import '../../css/z/zodugvyik.css';
import '../../css/n/nna69ybmr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gpzypub3s wm-shadow"/><path class="gpznrcqtq wm-k"/><path class="qda9p6ajk wm-k"/><path class="q6e7pfbwa wm-a"/><path class="gsr7a-biu wm-a"/><path class="o9yoc7b5m wm-a"/><path class="wm-a zodugvyik"/><path class="nna69ybmr wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-right-to-line"} {...others} />);
}

export default Component;
