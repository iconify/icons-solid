import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb9elkuje.css';
import '../../css/x/xukk5l_sc.css';
import '../../css/p/p455_jb_r.css';
import '../../css/k/k4ngftbni.css';
import '../../css/d/d4trd4b-s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="sb9elkuje"><path class="xukk5l_sc"/><path class="p455_jb_r"/><path class="k4ngftbni"/><path class="d4trd4b-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pork-meat"} {...others} />);
}

export default Component;
