import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kk-2hwbmm.css';
import '../../css/w/wkn46nb_i.css';
import '../../css/g/gf3fkwbky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="kk-2hwbmm"/><path class="wkn46nb_i"/><path class="gf3fkwbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:golf-ball"} {...others} />);
}

export default Component;
