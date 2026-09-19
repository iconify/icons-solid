import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/f__0e8bvt.css';
import '../../css/s/slenfkbvb.css';
import '../../css/z/zzrfdtxni.css';
import '../../css/f/f7n_c543n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="f__0e8bvt"/><path class="slenfkbvb"/><path class="zzrfdtxni"/><path class="f7n_c543n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:watch"} {...others} />);
}

export default Component;
