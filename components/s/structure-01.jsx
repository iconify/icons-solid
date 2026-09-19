import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/ww0lhqbty.css';
import '../../css/x/x2ixbdcjp.css';
import '../../css/n/nhg-vsbts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ww0lhqbty"/><path class="x2ixbdcjp"/><path class="nhg-vsbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:structure-01"} {...others} />);
}

export default Component;
