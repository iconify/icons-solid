import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d5ct4lbiy.css';
import '../../css/c/chf42nrhi.css';
import '../../css/y/yt88x7rlf.css';
import '../../css/x/xrspqab6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="d5ct4lbiy wm-shadow"/><path class="chf42nrhi wm-shadow"/><path class="yt88x7rlf"/><path class="xrspqab6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:puzzle-piece"} {...others} />);
}

export default Component;
