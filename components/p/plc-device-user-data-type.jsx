import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udyu9pxgk.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="udyu9pxgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:plc-device-user-data-type"} {...others} />);
}

export default Component;
