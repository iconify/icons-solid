import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m_f5uw_8g.css';
import '../../css/a/aewalzb3w.css';
import '../../css/m/mrov9tb8p.css';
import '../../css/p/p9u0eeb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="m_f5uw_8g"/><path class="aewalzb3w"/><path class="mrov9tb8p"/><path class="p9u0eeb3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-hospital-broken"} {...others} />);
}

export default Component;
