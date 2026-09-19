import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z2cemcb1p.css';
import '../../css/b/badaaobgc.css';
import '../../css/f/feq4-_9im.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z2cemcb1p"/><path class="badaaobgc"/><path class="feq4-_9im"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:permanent-job"} {...others} />);
}

export default Component;
