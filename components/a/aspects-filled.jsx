import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykalgvbci.css';
import '../../css/y/yn92p7rip.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="ykalgvbci"/><path class="yn92p7rip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:aspects-filled"} {...others} />);
}

export default Component;
