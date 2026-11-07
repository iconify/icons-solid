import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcgghzbvl.css';
import '../../css/i/inyn_6bav.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mcgghzbvl"/><path class="inyn_6bav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-2-bold-duotone"} {...others} />);
}

export default Component;
