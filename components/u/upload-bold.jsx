import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2--zlbhj.css';
import '../../css/j/jqzwqyd4q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t2--zlbhj"/><path class="jqzwqyd4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-bold"} {...others} />);
}

export default Component;
