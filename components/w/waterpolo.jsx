import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/r/rejaxfbru.css';
import '../../css/z/zpumeab6m.css';
import '../../css/z/z0i6nit8s.css';
import '../../css/v/vtr5x-rcg.css';
import '../../css/p/p59qf_a8e.css';
import '../../css/w/wxxqhhbqt.css';
import '../../css/r/r86g6yblg.css';
import '../../css/p/pa14c_a3b.css';
import '../../css/t/tzezaztys.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="rejaxfbru"/><path class="zpumeab6m"/><path class="z0i6nit8s"/><path class="vtr5x-rcg"/><path class="p59qf_a8e"/><path class="wxxqhhbqt"/><path class="r86g6yblg"/><path class="pa14c_a3b"/><path class="tzezaztys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:waterpolo"} {...others} />);
}

export default Component;
