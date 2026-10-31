import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gzj8bbbjn.css';
import '../../css/s/sul_k0bwf.css';
import '../../css/w/wwiu0ibfy.css';
import '../../css/h/h3f7job7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gzj8bbbjn wm-shadow"/><path class="sul_k0bwf wm-shadow"/><path class="wwiu0ibfy"/><path class="h3f7job7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:dollar-sign"} {...others} />);
}

export default Component;
