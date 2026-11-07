import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y_tv_8b3w.css';
import '../../css/d/d0h1ndbsd.css';
import '../../css/l/l1843dc6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y_tv_8b3w"/><path class="d0h1ndbsd"/><path class="l1843dc6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-output-broken"} {...others} />);
}

export default Component;
