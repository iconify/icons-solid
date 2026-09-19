import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/c/cua491bzg.css';
import '../../css/a/a81ieccto.css';
import '../../css/p/py3rz6x2s.css';
import '../../css/w/weul5oicp.css';
import '../../css/r/redndiulz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="cua491bzg"/><path class="a81ieccto"/><path class="py3rz6x2s"/><path class="weul5oicp"/><path class="redndiulz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:electronic-locks-close"} {...others} />);
}

export default Component;
