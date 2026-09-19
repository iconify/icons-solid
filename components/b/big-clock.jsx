import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nlmqk47ah.css';
import '../../css/o/ozbq1jbae.css';
import '../../css/n/nlsnl6dvu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="nlmqk47ah"/><circle class="ozbq1jbae"/><path class="nlsnl6dvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:big-clock"} {...others} />);
}

export default Component;
