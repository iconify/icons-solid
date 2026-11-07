import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd-dy5b1v.css';
import '../../css/m/m3911cl6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cd-dy5b1v"/><path class="m3911cl6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-storage-bold-duotone"} {...others} />);
}

export default Component;
