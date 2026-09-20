import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/m76sovb8j.css';
import '../../css/g/ga0bor7dq.css';
import '../../css/k/kq8n4699o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="m76sovb8j"/><path class="ga0bor7dq"/><path class="kq8n4699o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bag"} {...others} />);
}

export default Component;
