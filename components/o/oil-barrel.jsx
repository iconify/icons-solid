import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k0lno9bgx.css';
import '../../css/w/wzx-5xvic.css';
import '../../css/q/qk3kdsbng.css';
import '../../css/p/pzlrmg6rc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><ellipse class="k0lno9bgx"/><path class="wzx-5xvic"/><path class="qk3kdsbng"/><path class="pzlrmg6rc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:oil-barrel"} {...others} />);
}

export default Component;
