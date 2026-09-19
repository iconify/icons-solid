import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhjez_5ni.css';
import '../../css/w/w5v5asbue.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dhjez_5ni"/><path class="w5v5asbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-bubble-captions"} {...others} />);
}

export default Component;
