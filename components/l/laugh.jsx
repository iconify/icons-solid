import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utqzt6bcp.css';
import '../../css/g/g1pjbqb5c.css';
import '../../css/q/qrntc0b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utqzt6bcp wm-k"/><path class="g1pjbqb5c wm-a"/><path class="qrntc0b5o wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:laugh"} {...others} />);
}

export default Component;
