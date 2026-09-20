import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkqd1b__q.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="nkqd1b__q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:panel-ipc-success"} {...others} />);
}

export default Component;
