import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsw5o6x4o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gsw5o6x4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:cam-disk-600-seg"} {...others} />);
}

export default Component;
