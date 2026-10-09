import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5i-rfb6g.css';
import '../../css/p/pcvcreaar.css';
import '../../css/c/cotzlwrvw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e5i-rfb6g"/><path class="pcvcreaar"/><path class="cotzlwrvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-ccs-20-bold"} {...others} />);
}

export default Component;
