import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbb9xkbxu.css';
import '../../css/x/xdtxmyf1r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lbb9xkbxu"/><path class="xdtxmyf1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-right-20"} {...others} />);
}

export default Component;
