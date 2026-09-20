import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/k42wjac1z.css';
import '../../css/v/vd41o3-co.css';
import '../../css/w/w9-udcbpx.css';
import '../../css/o/owyisliko.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="k42wjac1z"/><path class="vd41o3-co"/><path class="w9-udcbpx"/><path class="owyisliko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:play-list-folder"} {...others} />);
}

export default Component;
