import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gshe_di8n.css';
import '../../css/v/vpfegd3_c.css';
import '../../css/d/dcrqhcent.css';
import '../../css/y/yhkyuhbxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gshe_di8n"/><path class="vpfegd3_c"/><path class="dcrqhcent"/><path class="yhkyuhbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:frowning"} {...others} />);
}

export default Component;
