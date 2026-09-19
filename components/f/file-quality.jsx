import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/euce6ob-r.css';
import '../../css/p/pv2ur-63o.css';
import '../../css/i/i43mf9b_f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="euce6ob-r"/><path class="pv2ur-63o"/><path class="i43mf9b_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-quality"} {...others} />);
}

export default Component;
