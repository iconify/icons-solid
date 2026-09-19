import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lmmph24an.css';
import '../../css/p/pifmxvl5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lmmph24an"/><path class="pifmxvl5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:server"} {...others} />);
}

export default Component;
