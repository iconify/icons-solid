import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/ukr1ucczm.css';
import '../../css/s/s7z8uvbmf.css';
import '../../css/j/jddlfcbxw.css';
import '../../css/q/qjgr22b3y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><circle class="ukr1ucczm"/><circle class="s7z8uvbmf"/><path class="jddlfcbxw"/><path class="qjgr22b3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:camera-five"} {...others} />);
}

export default Component;
