import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/noy8qwcws.css';
import '../../css/v/vvvmsxc8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="noy8qwcws"/><path clip-rule="evenodd" class="vvvmsxc8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:current-location-outline"} {...others} />);
}

export default Component;
