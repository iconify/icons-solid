import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sq-22o1-z.css';
import '../../css/u/uzhuqjbwo.css';
import '../../css/q/q3ovgr7pw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sq-22o1-z"/><path class="uzhuqjbwo"/><path class="q3ovgr7pw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cherry"} {...others} />);
}

export default Component;
