import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/knd-anbdw.css';
import '../../css/d/dv6uu4bar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="knd-anbdw"/><path class="dv6uu4bar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:radar-01"} {...others} />);
}

export default Component;
