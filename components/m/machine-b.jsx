import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7ou1kbpy.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="d7ou1kbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:machine-b"} {...others} />);
}

export default Component;
