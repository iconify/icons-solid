import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wrngtdykm.css';
import '../../css/y/yejqf6bhb.css';
import '../../css/m/m_aa5ccfu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="wrngtdykm"/><path class="yejqf6bhb"/><path class="m_aa5ccfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:vicia-faba"} {...others} />);
}

export default Component;
