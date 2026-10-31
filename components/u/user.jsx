import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bwxb4zbru.css';
import '../../css/w/wfy5mof3d.css';
import '../../css/r/rh6thpbkx.css';
import '../../css/d/dnn8z0qmr.css';
import '../../css/x/xltuw1ech.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bwxb4zbru wm-shadow"/><path class="wfy5mof3d wm-shadow"/><path class="rh6thpbkx"/><path class="dnn8z0qmr"/><path class="xltuw1ech"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:user"} {...others} />);
}

export default Component;
