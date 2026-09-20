import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loc77xbtr.css';
import '../../css/d/d0ipc7b7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="loc77xbtr"/><path class="d0ipc7b7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:brg"} {...others} />);
}

export default Component;
