import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1nt6tnct.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="o1nt6tnct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:communication-filled"} {...others} />);
}

export default Component;
