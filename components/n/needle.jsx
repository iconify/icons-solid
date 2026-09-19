import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tpe_wqd8w.css';
import '../../css/f/fgvgprj_l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="tpe_wqd8w"/><path class="fgvgprj_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:needle"} {...others} />);
}

export default Component;
