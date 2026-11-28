import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz8lyhb4j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/ga_2bab2s.css';
import '../../css/w/w7_mhrwuu.css';
import '../../css/f/f4c2eobkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jz8lyhb4j secondary"/><g class="dt0cm9dhy primary"><path class="ga_2bab2s"/><path class="w7_mhrwuu"/><path class="f4c2eobkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:calendar-fold-duo"} {...others} />);
}

export default Component;
