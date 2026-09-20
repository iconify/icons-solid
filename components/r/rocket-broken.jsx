import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r75ibw1at.css';
import '../../css/y/ywaaisbty.css';
import '../../css/q/qevjdebni.css';
import '../../css/t/tangbccak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r75ibw1at"/><path class="ywaaisbty"/><path class="qevjdebni"/><path class="tangbccak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-broken"} {...others} />);
}

export default Component;
