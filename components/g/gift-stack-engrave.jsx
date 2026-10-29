import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qpl6hxb8w.css';
import '../../css/j/ji6eupbux.css';
import '../../css/y/y63n77z1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qpl6hxb8w"/><path class="ji6eupbux wm-shadow"/><path class="y63n77z1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gift-stack-engrave"} {...others} />);
}

export default Component;
