import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3h-12bbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3h-12bbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:fullscreen-1"} {...others} />);
}

export default Component;
