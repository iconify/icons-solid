import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqrud2bhn.css';
import '../../css/u/u_h_b-bhb.css';

const viewBox = {"width":128,"height":128};
const content = `<rect class="wqrud2bhn"/><path class="u_h_b-bhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:facebook"} {...others} />);
}

export default Component;
