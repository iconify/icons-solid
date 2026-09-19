import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pt03adx-w.css';
import '../../css/u/uawfmsvfl.css';
import '../../css/s/s7q79h02l.css';
import '../../css/s/spu85samc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="pt03adx-w"/><path class="uawfmsvfl"/><path class="s7q79h02l"/><path class="spu85samc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:transfer-data"} {...others} />);
}

export default Component;
