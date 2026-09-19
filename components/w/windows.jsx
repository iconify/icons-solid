import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9r4tloyv.css';
import '../../css/k/kuz2w4bjq.css';
import '../../css/y/yrh162bqt.css';
import '../../css/s/sxow_ibmj.css';
import '../../css/h/h9rnambvp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="b9r4tloyv"><path class="kuz2w4bjq"/><path class="yrh162bqt"/><path class="sxow_ibmj"/><path class="h9rnambvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:windows"} {...others} />);
}

export default Component;
