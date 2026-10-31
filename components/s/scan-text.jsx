import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d_g7e1b3d.css';
import '../../css/p/pecauxbpe.css';
import '../../css/s/sqb5q3b4q.css';
import '../../css/x/xaw3eib5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="d_g7e1b3d wm-shadow"/><path class="pecauxbpe wm-shadow"/><path class="sqb5q3b4q"/><path class="xaw3eib5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:scan-text"} {...others} />);
}

export default Component;
