import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvcm_2wyi.css';
import '../../css/o/oqai2m_dh.css';
import '../../css/u/u7dt5acml.css';
import '../../css/v/v2xxlybwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvcm_2wyi"/><path class="oqai2m_dh"/><path class="u7dt5acml"/><path class="v2xxlybwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-bold-duotone"} {...others} />);
}

export default Component;
