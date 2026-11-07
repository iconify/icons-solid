import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/icy1adcel.css';
import '../../css/y/y1k58pkic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="icy1adcel"/><path class="y1k58pkic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plain-2-broken"} {...others} />);
}

export default Component;
