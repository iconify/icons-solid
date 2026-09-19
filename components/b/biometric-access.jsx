import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s5vktnbeo.css';
import '../../css/u/unskt_bda.css';
import '../../css/t/tcghh8b0d.css';
import '../../css/m/mon8s9lvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s5vktnbeo"/><path class="unskt_bda"/><path class="tcghh8b0d"/><path class="mon8s9lvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:biometric-access"} {...others} />);
}

export default Component;
