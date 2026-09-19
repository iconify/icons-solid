import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwy7sxrzt.css';

const viewBox = {"width":1792,"height":1280};
const content = `<path class="jwy7sxrzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:video-camera"} {...others} />);
}

export default Component;
