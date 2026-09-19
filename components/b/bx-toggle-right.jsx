import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to2zydb0a.css';
import '../../css/w/w0zocplep.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="to2zydb0a"/><path class="w0zocplep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-toggle-right"} {...others} />);
}

export default Component;
