import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jqjkvc5ue.css';
import '../../css/q/ql9sd2bvf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="jqjkvc5ue"/><path class="ql9sd2bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:alarm-clock"} {...others} />);
}

export default Component;
