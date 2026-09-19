import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v_wvpib4a.css';
import '../../css/m/mpo63bcwo.css';
import '../../css/n/nhfue6ory.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v_wvpib4a"/><path class="mpo63bcwo"/><path class="nhfue6ory"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:database-stats"} {...others} />);
}

export default Component;
