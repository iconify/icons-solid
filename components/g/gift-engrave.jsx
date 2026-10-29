import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j7y3a7bgh.css';
import '../../css/s/sliiisb3g.css';
import '../../css/v/v8clh90yn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j7y3a7bgh"/><path class="sliiisb3g wm-shadow"/><path class="v8clh90yn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gift-engrave"} {...others} />);
}

export default Component;
