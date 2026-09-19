import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wovc_fb3p.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="wovc_fb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:tumblr-rect"} {...others} />);
}

export default Component;
