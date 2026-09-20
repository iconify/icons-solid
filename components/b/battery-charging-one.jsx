import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e22_hsbig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e22_hsbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:battery-charging-one"} {...others} />);
}

export default Component;
