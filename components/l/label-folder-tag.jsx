import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lfet3fb5e.css';
import '../../css/v/v-uxf82ng.css';
import '../../css/d/djnc3qbep.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="lfet3fb5e"/><path class="v-uxf82ng"/><path class="djnc3qbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:label-folder-tag"} {...others} />);
}

export default Component;
