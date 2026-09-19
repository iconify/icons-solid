import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q0nlyobyz.css';
import '../../css/b/b2aycd53f.css';
import '../../css/k/kyhrmps2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q0nlyobyz"/><path class="b2aycd53f"/><path class="kyhrmps2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:presentation-06"} {...others} />);
}

export default Component;
