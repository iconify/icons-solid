import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/cuv4fybwq.css';
import '../../css/q/q_j2px_7c.css';
import '../../css/s/sxeotoblf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="cuv4fybwq"/><path class="q_j2px_7c"/><path class="sxeotoblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:folder-plus"} {...others} />);
}

export default Component;
