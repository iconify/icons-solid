import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iajx504bs.css';
import '../../css/q/qmvobh65p.css';
import '../../css/d/dj3sakoey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iajx504bs"/><path class="qmvobh65p"/><path class="dj3sakoey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:billiard-01"} {...others} />);
}

export default Component;
