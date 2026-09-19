import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/diqu0zb_j.css';

const viewBox = {"width":383,"height":512};
const content = `<path class="diqu0zb_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:nano"} {...others} />);
}

export default Component;
