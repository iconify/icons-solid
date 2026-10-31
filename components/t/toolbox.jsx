import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mxn1xcbxn.css';
import '../../css/r/ryuwp6bae.css';
import '../../css/y/yw2kh5b8s.css';
import '../../css/i/ivmh9xj4p.css';
import '../../css/w/wgd4l8b8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="mxn1xcbxn wm-shadow"/><path class="ryuwp6bae wm-shadow"/><path class="yw2kh5b8s"/><path class="ivmh9xj4p"/><path class="wgd4l8b8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:toolbox"} {...others} />);
}

export default Component;
