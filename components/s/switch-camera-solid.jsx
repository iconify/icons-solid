import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr29w0dkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rr29w0dkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:switch-camera-solid"} {...others} />);
}

export default Component;
