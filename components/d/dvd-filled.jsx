import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs3tcib1t.css';
import '../../css/e/e8yz86-ku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gs3tcib1t"/><path class="e8yz86-ku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:dvd-filled"} {...others} />);
}

export default Component;
