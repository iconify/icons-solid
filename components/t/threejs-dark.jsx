import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/p/p7qm7vb8b.css';
import '../../css/p/p9gehxb2g.css';
import '../../css/y/y1rr_bcie.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path clip-rule="evenodd" class="p7qm7vb8b"/><path clip-rule="evenodd" class="p9gehxb2g"/><path clip-rule="evenodd" class="y1rr_bcie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:threejs-dark"} {...others} />);
}

export default Component;
