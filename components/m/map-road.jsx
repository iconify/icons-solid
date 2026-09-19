import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/f/f0ucseb7n.css';
import '../../css/k/k4o9dxbnn.css';
import '../../css/t/tnvxvpsdk.css';
import '../../css/t/t_4e_wtts.css';
import '../../css/w/wjc26y0iw.css';
import '../../css/l/l_cwwybbr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="f0ucseb7n"/><path class="k4o9dxbnn"/><path class="tnvxvpsdk"/><path class="t_4e_wtts"/><path class="wjc26y0iw"/><path class="l_cwwybbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:map-road"} {...others} />);
}

export default Component;
