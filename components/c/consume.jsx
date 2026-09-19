import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qsfhwff4p.css';
import '../../css/z/zfc090b3x.css';
import '../../css/m/mg-hozavo.css';
import '../../css/p/p3h2roxlo.css';
import '../../css/s/s0ummfbpm.css';
import '../../css/u/u9mbv386n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="qsfhwff4p"/><path class="zfc090b3x"/><path class="mg-hozavo"/><path class="p3h2roxlo"/><path class="s0ummfbpm"/><path class="u9mbv386n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:consume"} {...others} />);
}

export default Component;
