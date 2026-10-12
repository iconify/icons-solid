import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6mxce4uq.css';
import '../../css/n/nuwhiyu0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d6mxce4uq"/><path class="nuwhiyu0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:heart-handshake-filled"} {...others} />);
}

export default Component;
