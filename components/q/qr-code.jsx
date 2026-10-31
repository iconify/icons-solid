import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tzn2_abpy.css';
import '../../css/d/dggy76bvx.css';
import '../../css/s/sf3y2ibxf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tzn2_abpy wm-shadow"/><path class="dggy76bvx wm-shadow"/><path class="sf3y2ibxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:qr-code"} {...others} />);
}

export default Component;
