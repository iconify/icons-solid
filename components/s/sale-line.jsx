import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt1wq7lox.css';
import '../../css/k/kabj7mbth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yt1wq7lox"/><path class="kabj7mbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sale-line"} {...others} />);
}

export default Component;
