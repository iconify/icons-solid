import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5jtl4brd.css';
import '../../css/s/slyguszvk.css';
import '../../css/e/ekngixjgr.css';

const viewBox = {"width":2000,"height":2000};
const content = `<g class="g5jtl4brd"><path class="slyguszvk"/><path class="ekngixjgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:send"} {...others} />);
}

export default Component;
