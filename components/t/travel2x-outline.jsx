import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ndghrl6cw.css';
import '../../css/h/hpxcg_b0l.css';
import '../../css/z/zsxrt0eic.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ndghrl6cw"/><path class="hpxcg_b0l"/><path class="zsxrt0eic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:travel2x-outline"} {...others} />);
}

export default Component;
