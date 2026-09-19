import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g52mlw2ar.css';
import '../../css/i/ivtb9ubih.css';
import '../../css/b/b8qt8lbsk.css';
import '../../css/l/lx85cvamk.css';
import '../../css/a/a2xqgdbch.css';
import '../../css/v/vpat_6qhd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="g52mlw2ar"/><path class="ivtb9ubih"/><path class="b8qt8lbsk"/><path class="lx85cvamk"/><path class="a2xqgdbch"/><path class="vpat_6qhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hourglass-full"} {...others} />);
}

export default Component;
