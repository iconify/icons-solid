import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae6vf0y8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ae6vf0y8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:qrcode-2-line"} {...others} />);
}

export default Component;
