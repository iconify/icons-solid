import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wau4m5pas.css';
import '../../css/q/qj1qzybti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wau4m5pas"/><path class="qj1qzybti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:hospital"} {...others} />);
}

export default Component;
