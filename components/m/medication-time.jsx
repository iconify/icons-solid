import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pg5rmbcty.css';
import '../../css/q/qz-mrebrm.css';
import '../../css/t/tgxo-cukz.css';
import '../../css/w/w7__z0ipt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="pg5rmbcty"/><path class="qz-mrebrm"/><circle class="tgxo-cukz"/><path class="w7__z0ipt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:medication-time"} {...others} />);
}

export default Component;
