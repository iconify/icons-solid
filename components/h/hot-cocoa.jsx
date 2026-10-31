import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x97mdxb8y.css';
import '../../css/x/x364ycbkd.css';
import '../../css/j/jh_igqb8n.css';
import '../../css/u/ux8c5fbvb.css';
import '../../css/d/db8f19blf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow x97mdxb8y"/><path class="wm-shadow x364ycbkd"/><path class="jh_igqb8n"/><path class="ux8c5fbvb"/><path class="db8f19blf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:hot-cocoa"} {...others} />);
}

export default Component;
