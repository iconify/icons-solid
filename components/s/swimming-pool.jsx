import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/q/q89w_4_5l.css';
import '../../css/m/mv0rwabts.css';
import '../../css/w/wdid9rbys.css';
import '../../css/q/qx6zi9s9r.css';
import '../../css/r/rejaxfbru.css';
import '../../css/z/zpumeab6m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="q89w_4_5l"/><path class="mv0rwabts"/><path class="wdid9rbys"/><path class="qx6zi9s9r"/><path class="rejaxfbru"/><path class="zpumeab6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:swimming-pool"} {...others} />);
}

export default Component;
