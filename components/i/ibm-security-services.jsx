import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_u1exb-p.css';
import '../../css/h/hbx_zybzm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j_u1exb-p"/><path class="hbx_zybzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-security-services"} {...others} />);
}

export default Component;
