import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/v/vbd70wppp.css';
import '../../css/s/s41omdbbh.css';
import '../../css/l/lb3mijz1r.css';
import '../../css/l/lvmdmwb6j.css';
import '../../css/e/eh2fp3h8s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="vbd70wppp"/><path class="s41omdbbh"/><path class="lb3mijz1r"/><path class="lvmdmwb6j"/><path class="eh2fp3h8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:upload-logs"} {...others} />);
}

export default Component;
