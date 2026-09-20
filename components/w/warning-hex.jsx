import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s3i77ouuq.css';
import '../../css/w/wrt-x_0am.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(-1 -1)" class="bi12bsetm"><path class="s3i77ouuq"/><circle class="wrt-x_0am"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:warning-hex"} {...others} />);
}

export default Component;
