import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x1nfqqbao.css';
import '../../css/q/qg9k3obcg.css';
import '../../css/d/dfng6cbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x1nfqqbao"/><path class="qg9k3obcg"/><path class="dfng6cbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-broken"} {...others} />);
}

export default Component;
