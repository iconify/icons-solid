import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/x/xwbieuceb.css';
import '../../css/j/ji9bjq-2v.css';
import '../../css/k/kv1gi7bvd.css';
import '../../css/q/qjsoxqu4k.css';
import '../../css/l/lq3dhd_2e.css';
import '../../css/c/cesemleqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="tejuo1bjd"/><path clip-rule="evenodd" class="xwbieuceb"/><path clip-rule="evenodd" class="ji9bjq-2v"/><path class="kv1gi7bvd"/><path class="qjsoxqu4k"/><path class="lq3dhd_2e"/><path class="cesemleqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:user-multiple-circle"} {...others} />);
}

export default Component;
