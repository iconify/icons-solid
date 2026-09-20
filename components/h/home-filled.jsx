import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg0g_ibbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sg0g_ibbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:home-filled"} {...others} />);
}

export default Component;
