import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a-7jhj4gy.css';
import '../../css/z/zf57rje2z.css';
import '../../css/y/ygtvqmgmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a-7jhj4gy"/><path class="wm-shadow zf57rje2z"/><path class="ygtvqmgmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-low-engrave"} {...others} />);
}

export default Component;
