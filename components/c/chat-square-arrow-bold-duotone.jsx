import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfz6qsjee.css';
import '../../css/c/cq_7-dbln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lfz6qsjee"/><path clip-rule="evenodd" class="cq_7-dbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-arrow-bold-duotone"} {...others} />);
}

export default Component;
