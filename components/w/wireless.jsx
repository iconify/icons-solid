import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwr_azbnc.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/j/jhtplst3i.css';
import '../../css/t/tsuhnpbzy.css';
import '../../css/w/wdh_whbyu.css';
import '../../css/i/i04lqib5p.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vwr_azbnc"/><g class="hzhb0bcwn"><rect class="jhtplst3i"/><circle class="tsuhnpbzy"/><path class="wdh_whbyu"/><path class="i04lqib5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:wireless"} {...others} />);
}

export default Component;
