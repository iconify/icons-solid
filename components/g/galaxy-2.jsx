import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/ahgh_wbut.css';
import '../../css/c/chsnpfbnb.css';
import '../../css/w/wlzsooodz.css';
import '../../css/f/ft5slcb8z.css';
import '../../css/v/v4p5j_bgu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ahgh_wbut"/><path class="chsnpfbnb"/><path class="wlzsooodz"/><path class="ft5slcb8z"/><path class="v4p5j_bgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:galaxy-2"} {...others} />);
}

export default Component;
