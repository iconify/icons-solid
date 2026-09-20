import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w2h6rqbbj.css';
import '../../css/e/ekg34hb7e.css';
import '../../css/f/f1f6vpblq.css';
import '../../css/v/vtoebn-cq.css';
import '../../css/h/hmnpgl_gg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="w2h6rqbbj"/><path class="ekg34hb7e"/><path class="f1f6vpblq"/><path class="vtoebn-cq"/><path class="hmnpgl_gg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cake-slice"} {...others} />);
}

export default Component;
