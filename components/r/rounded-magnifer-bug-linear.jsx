import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qh-3y5b_g.css';
import '../../css/c/ck3tz-bxo.css';
import '../../css/j/jjar52fez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="qh-3y5b_g"/><path class="ck3tz-bxo"/><path class="jjar52fez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifer-bug-linear"} {...others} />);
}

export default Component;
