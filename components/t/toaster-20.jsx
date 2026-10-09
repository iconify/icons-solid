import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxo9vzbcf.css';
import '../../css/c/ckf78acjm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cxo9vzbcf"/><path class="ckf78acjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toaster-20"} {...others} />);
}

export default Component;
