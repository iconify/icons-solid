import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gd20fobey.css';
import '../../css/l/lnxb44b5j.css';
import '../../css/s/sn07vob-o.css';
import '../../css/t/tknvtsbsb.css';
import '../../css/x/x2dse1mrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gd20fobey"/><path class="lnxb44b5j"/><path class="sn07vob-o"/><path class="tknvtsbsb"/><path class="x2dse1mrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-person-glasses"} {...others} />);
}

export default Component;
