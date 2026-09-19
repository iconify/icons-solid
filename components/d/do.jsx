import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/se8tk6-rk.css';
import '../../css/r/rlb2asbwd.css';
import '../../css/u/u9igoz_cs.css';
import '../../css/v/v7tqiod_f.css';
import '../../css/q/q8_5ekq4h.css';
import '../../css/s/snbj9bbcu.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="se8tk6-rk"/><path class="rlb2asbwd"/><path class="u9igoz_cs"/><path class="v7tqiod_f"/><path class="q8_5ekq4h"/><path class="snbj9bbcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:do"} {...others} />);
}

export default Component;
