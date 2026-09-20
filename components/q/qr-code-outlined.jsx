import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmvj3g29q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xmvj3g29q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:qr-code-outlined"} {...others} />);
}

export default Component;
