import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyc9zmnvx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xyc9zmnvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:buffer-stop"} {...others} />);
}

export default Component;
