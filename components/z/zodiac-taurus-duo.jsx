import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjimlrkvp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jy-weacnj.css';
import '../../css/r/rdoqyyibh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjimlrkvp secondary"/><g class="dt0cm9dhy primary"><path class="jy-weacnj"/><path class="rdoqyyibh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-taurus-duo"} {...others} />);
}

export default Component;
