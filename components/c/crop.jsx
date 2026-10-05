import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcrfikb1q.css';
import '../../css/q/qocxejb5m.css';
import '../../css/x/x6g4jobmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="wcrfikb1q"><path class="qocxejb5m"/><path class="x6g4jobmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:crop"} {...others} />);
}

export default Component;
