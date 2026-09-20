import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov6vt9tgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ov6vt9tgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:usb"} {...others} />);
}

export default Component;
