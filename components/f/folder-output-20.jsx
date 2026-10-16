import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwb0facpd.css';
import '../../css/x/x5goyhbiu.css';
import '../../css/t/tqvccub8k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xwb0facpd"/><path class="x5goyhbiu"/><path class="tqvccub8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-output-20"} {...others} />);
}

export default Component;
