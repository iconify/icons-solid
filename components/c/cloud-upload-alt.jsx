import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q76ry8bfm.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="q76ry8bfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:cloud-upload-alt"} {...others} />);
}

export default Component;
