import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8_xspb3x.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="t8_xspb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:video-camera"} {...others} />);
}

export default Component;
