import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jqpjq9b1t.css';
import '../../css/l/l5k9v0pct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jqpjq9b1t"/><ellipse class="l5k9v0pct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:triangle-03"} {...others} />);
}

export default Component;
