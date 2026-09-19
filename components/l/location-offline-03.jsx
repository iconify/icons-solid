import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j0ans_imz.css';
import '../../css/g/gqmf69b5m.css';
import '../../css/v/vivgit4ai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j0ans_imz"/><path class="gqmf69b5m"/><path class="vivgit4ai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:location-offline-03"} {...others} />);
}

export default Component;
