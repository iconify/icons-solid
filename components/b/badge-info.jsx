import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p4u7d8hbn.css';
import '../../css/f/f7gqgccam.css';
import '../../css/d/dfwi35bsr.css';
import '../../css/c/crppkeboa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="p4u7d8hbn wm-shadow"/><path class="f7gqgccam wm-shadow"/><path class="dfwi35bsr"/><path class="crppkeboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:badge-info"} {...others} />);
}

export default Component;
