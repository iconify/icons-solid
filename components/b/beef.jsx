import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o14_xbufx.css';
import '../../css/e/exzyvvbdj.css';
import '../../css/v/vcfahv-hr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="o14_xbufx"/><path class="exzyvvbdj"/><path class="vcfahv-hr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:beef"} {...others} />);
}

export default Component;
