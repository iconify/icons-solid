import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o3gek45nk.css';
import '../../css/b/blkorcccc.css';
import '../../css/u/ucsa-pbxo.css';
import '../../css/y/ybm1p_boy.css';
import '../../css/g/gulq_4b1m.css';
import '../../css/t/tyc5wfjoj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="o3gek45nk"/><path class="blkorcccc"/><path class="ucsa-pbxo"/><path class="ybm1p_boy"/><path class="gulq_4b1m"/><path class="tyc5wfjoj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:full-dress-longuette"} {...others} />);
}

export default Component;
