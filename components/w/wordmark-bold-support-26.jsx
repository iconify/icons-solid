import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce1150bat.css';

const viewBox = {"width":78,"height":26};
const content = `<path class="ce1150bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:wordmark-bold-support-26"} {...others} />);
}

export default Component;
