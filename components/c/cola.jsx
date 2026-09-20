import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qe54fbbdm.css';
import '../../css/z/z5ocq1cuj.css';
import '../../css/q/q_rj_gbbm.css';
import '../../css/d/dd0u9dtll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qe54fbbdm"/><path class="z5ocq1cuj"/><path class="q_rj_gbbm"/><path class="dd0u9dtll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cola"} {...others} />);
}

export default Component;
