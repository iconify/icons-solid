import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdv9229rt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kdv9229rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:usb-circle-filled"} {...others} />);
}

export default Component;
