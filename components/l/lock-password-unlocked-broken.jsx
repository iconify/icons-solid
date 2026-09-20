import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xnnhmccbq.css';
import '../../css/j/jcil5rb8a.css';
import '../../css/e/eyig6k37j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xnnhmccbq"/><path class="jcil5rb8a"/><path class="eyig6k37j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-password-unlocked-broken"} {...others} />);
}

export default Component;
