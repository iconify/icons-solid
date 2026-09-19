import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/vcv2znkmz.css';
import '../../css/c/ctddxw8bc.css';
import '../../css/x/xto09eavn.css';
import '../../css/v/vcu2f7b5m.css';
import '../../css/j/jb0r2qdpu.css';
import '../../css/d/dgt6izbao.css';
import '../../css/n/np632obux.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="vcv2znkmz"/><path class="ctddxw8bc"/><path class="xto09eavn"/><path class="vcu2f7b5m"/><path class="jb0r2qdpu"/><path class="dgt6izbao"/><path class="np632obux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ea"} {...others} />);
}

export default Component;
