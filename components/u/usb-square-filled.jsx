import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svie05b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="svie05b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:usb-square-filled"} {...others} />);
}

export default Component;
