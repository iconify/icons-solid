import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to5_hpm1w.css';
import '../../css/k/kcy-14atq.css';
import '../../css/h/hdtbo6cva.css';
import '../../css/h/h6iv_t2pn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="to5_hpm1w"><path class="kcy-14atq"/><path class="hdtbo6cva"/><path class="h6iv_t2pn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clear-format"} {...others} />);
}

export default Component;
