import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bi-h1cbhh.css';
import '../../css/m/ms02r72gm.css';
import '../../css/m/m9ll0eb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bi-h1cbhh"/><path class="ms02r72gm wm-shadow"/><path class="m9ll0eb5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-filter-engrave"} {...others} />);
}

export default Component;
