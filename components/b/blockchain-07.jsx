import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t4106lyme.css';
import '../../css/q/q_ucgqv8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="t4106lyme"/><path class="q_ucgqv8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blockchain-07"} {...others} />);
}

export default Component;
