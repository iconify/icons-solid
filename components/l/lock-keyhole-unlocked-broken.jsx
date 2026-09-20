import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cql1pwtbp.css';
import '../../css/x/xnnhmccbq.css';
import '../../css/j/jcil5rb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="cql1pwtbp"/><path class="xnnhmccbq"/><path class="jcil5rb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-keyhole-unlocked-broken"} {...others} />);
}

export default Component;
