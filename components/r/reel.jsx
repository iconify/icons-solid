import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bnk-_vbtx.css';
import '../../css/l/lsec2j3xn.css';
import '../../css/w/w9x8kzbyj.css';
import '../../css/v/v1_9a1bkq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="bnk-_vbtx"/><path class="lsec2j3xn"/><path class="w9x8kzbyj"/><path class="v1_9a1bkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:reel"} {...others} />);
}

export default Component;
