import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rufn35b2j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/g/gyz95mbzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rufn35b2j secondary"/><g class="dt0cm9dhy primary"><path class="oqqr_m9av"/><path class="gyz95mbzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layout-columns-duo"} {...others} />);
}

export default Component;
