import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/or3w-hr2p.css';
import '../../css/i/i5nzyoqoz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="or3w-hr2p"/><path class="i5nzyoqoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-nacs-20"} {...others} />);
}

export default Component;
