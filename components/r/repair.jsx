import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yf5xtnrqh.css';
import '../../css/f/f45mp1b7q.css';
import '../../css/j/jfffpyiud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yf5xtnrqh"/><path class="f45mp1b7q"/><path class="jfffpyiud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:repair"} {...others} />);
}

export default Component;
