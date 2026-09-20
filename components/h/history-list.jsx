import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7n0j6bmn.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="u7n0j6bmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:history-list"} {...others} />);
}

export default Component;
