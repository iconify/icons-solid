import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oacms1bzt.css';
import '../../css/m/m_f5uw_8g.css';
import '../../css/a/aewalzb3w.css';
import '../../css/m/mrov9tb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oacms1bzt"/><circle class="m_f5uw_8g"/><path class="aewalzb3w"/><path class="mrov9tb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-hospital-linear"} {...others} />);
}

export default Component;
