import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/am1_mpf-b.css';
import '../../css/o/odhm74bfl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="am1_mpf-b"/><path class="odhm74bfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:send-backward"} {...others} />);
}

export default Component;
