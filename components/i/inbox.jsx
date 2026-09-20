import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clltq9axj.css';
import '../../css/d/dlpepfyti.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="clltq9axj"/><path class="dlpepfyti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:inbox"} {...others} />);
}

export default Component;
