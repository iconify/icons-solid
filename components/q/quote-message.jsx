import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gjsnwctbo.css';
import '../../css/q/q_yk71xvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gjsnwctbo"/><path class="q_yk71xvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:quote-message"} {...others} />);
}

export default Component;
