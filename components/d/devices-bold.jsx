import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9benlbfz.css';
import '../../css/k/kemsso1tv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9benlbfz"/><path clip-rule="evenodd" class="kemsso1tv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:devices-bold"} {...others} />);
}

export default Component;
