import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ianaz7b0e.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/d/db-k4n35p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ianaz7b0e"/><path class="ko6o-6b9b"/><path class="db-k4n35p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:info-circle-broken"} {...others} />);
}

export default Component;
