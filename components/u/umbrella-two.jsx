import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/yaxw8-bqi.css';
import '../../css/w/wkthxgbnx.css';
import '../../css/k/kbz-upn-i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="yaxw8-bqi"/><path class="wkthxgbnx"/><path class="kbz-upn-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:umbrella-two"} {...others} />);
}

export default Component;
