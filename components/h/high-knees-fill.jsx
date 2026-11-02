import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7w6djb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q7w6djb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:high-knees-fill"} {...others} />);
}

export default Component;
