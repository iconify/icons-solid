import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ianaz7b0e.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/d/db-k4n35p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ianaz7b0e"/><path class="si_mtzbvj"/><path class="db-k4n35p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:info-square-broken"} {...others} />);
}

export default Component;
