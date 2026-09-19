import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/izj9p1ffx.css';
import '../../css/f/fg98ribbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="izj9p1ffx"/><path class="fg98ribbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shield-blockchain"} {...others} />);
}

export default Component;
