import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7bk8s24b.css';
import '../../css/c/cnc3b_b8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f7bk8s24b"/><path clip-rule="evenodd" class="cnc3b_b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:invoice-outline"} {...others} />);
}

export default Component;
