import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm9ue06lw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vm9ue06lw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:usb-drive"} {...others} />);
}

export default Component;
