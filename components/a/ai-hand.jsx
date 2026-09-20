import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elr6iiype.css';
import '../../css/c/cycdfo7sy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="elr6iiype"/><path class="cycdfo7sy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ai-hand"} {...others} />);
}

export default Component;
