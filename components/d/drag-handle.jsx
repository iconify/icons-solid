import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dj8zxibgk.css';
import '../../css/g/gv0068sbg.css';
import '../../css/d/dv-gida4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="dj8zxibgk wm-shadow"/><path class="gv0068sbg wm-shadow"/><path class="dv-gida4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:drag-handle"} {...others} />);
}

export default Component;
