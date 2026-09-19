import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6ja8kb8n.css';
import '../../css/v/v1cwuvwqe.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p6ja8kb8n"/><path class="v1cwuvwqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:subtract-filled"} {...others} />);
}

export default Component;
