import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhhkwqoof.css';
import '../../css/w/wclgmvb9s.css';
import '../../css/d/d_tdrgg1o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yhhkwqoof"/><path class="wclgmvb9s"/><path class="d_tdrgg1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cics-system-group"} {...others} />);
}

export default Component;
