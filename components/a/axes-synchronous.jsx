import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5o5d4ter.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="y5o5d4ter"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:axes-synchronous"} {...others} />);
}

export default Component;
