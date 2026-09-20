import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqou_g3dh.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="oqou_g3dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:machine-a-filled"} {...others} />);
}

export default Component;
