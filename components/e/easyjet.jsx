import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbxh-3qlu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rbxh-3qlu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:easyjet"} {...others} />);
}

export default Component;
