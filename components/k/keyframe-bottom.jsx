import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k0w5wetfq.css';
import '../../css/s/sdi5r08mg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k0w5wetfq"/><path class="sdi5r08mg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyframe-bottom"} {...others} />);
}

export default Component;
