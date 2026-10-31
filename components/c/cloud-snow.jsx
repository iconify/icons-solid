import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dcfg1ck_a.css';
import '../../css/r/rsp9ttbii.css';
import '../../css/n/n1y1i5mpe.css';
import '../../css/j/j9dowbjkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="dcfg1ck_a wm-shadow"/><path class="rsp9ttbii wm-shadow"/><path class="n1y1i5mpe"/><path class="j9dowbjkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-snow"} {...others} />);
}

export default Component;
