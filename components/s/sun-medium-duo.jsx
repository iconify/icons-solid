import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smr8-nmee.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/twr587btq.css';
import '../../css/m/m2aszhjda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary smr8-nmee"/><g class="dt0cm9dhy primary"><path class="twr587btq"/><path class="m2aszhjda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sun-medium-duo"} {...others} />);
}

export default Component;
