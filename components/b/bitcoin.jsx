import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8vlxmbmn.css';
import '../../css/g/g-4pifb7q.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="l8vlxmbmn"/><path clip-rule="evenodd" class="g-4pifb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bitcoin"} {...others} />);
}

export default Component;
