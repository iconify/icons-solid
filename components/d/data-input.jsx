import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/a/aw1utkkeq.css';
import '../../css/t/t2k3-abcp.css';

const viewBox = {"width":2000,"height":2000};
const content = `<g class="pr52f_b5y"><path class="aw1utkkeq"/><path class="t2k3-abcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:data-input"} {...others} />);
}

export default Component;
