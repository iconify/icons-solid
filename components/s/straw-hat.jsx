import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/u/ue77sibcn.css';
import '../../css/x/xp3d3sbpi.css';
import '../../css/o/olht3hb0p.css';
import '../../css/t/t-epvf-9u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ue77sibcn"/><path class="xp3d3sbpi"/><path class="olht3hb0p"/><path class="t-epvf-9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:straw-hat"} {...others} />);
}

export default Component;
