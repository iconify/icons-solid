import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l3jogvtxu.css';
import '../../css/k/kzjab8bcu.css';
import '../../css/f/f5ay05zjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l3jogvtxu"/><path class="kzjab8bcu"/><circle class="f5ay05zjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-2-broken"} {...others} />);
}

export default Component;
