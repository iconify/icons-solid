import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym7f000we.css';
import '../../css/g/gv5ke9bho.css';
import '../../css/r/rqzve2bej.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ym7f000we"/><path class="gv5ke9bho"/><path class="rqzve2bej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:documents-minimalistic-bold"} {...others} />);
}

export default Component;
