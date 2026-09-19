import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il6iivpjm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="il6iivpjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:tilt-window-opened"} {...others} />);
}

export default Component;
