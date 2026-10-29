import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hkh54t9yf.css';
import '../../css/c/cf2fsfsjn.css';
import '../../css/b/b74qgjb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hkh54t9yf"/><path class="cf2fsfsjn"/><path class="b74qgjb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:traffic-light"} {...others} />);
}

export default Component;
