import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j0ghh_c0v.css';
import '../../css/m/ml0wobb6r.css';
import '../../css/t/tygsh6hqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j0ghh_c0v"/><path class="ml0wobb6r wm-shadow"/><path class="tygsh6hqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-engrave"} {...others} />);
}

export default Component;
