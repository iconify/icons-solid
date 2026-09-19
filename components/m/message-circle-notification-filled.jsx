import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or6rs0b6f.css';
import '../../css/j/jbe-t4btk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="or6rs0b6f"/><path class="jbe-t4btk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-circle-notification-filled"} {...others} />);
}

export default Component;
