import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk2nm29hy.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="tk2nm29hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:communication"} {...others} />);
}

export default Component;
