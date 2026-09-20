import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msngx6wzk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="msngx6wzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:file-list-2-fill"} {...others} />);
}

export default Component;
