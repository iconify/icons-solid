import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0avo1bww.css';
import '../../css/l/lj9o2zbay.css';
import '../../css/h/h2i-zfbvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e0avo1bww"/><path class="lj9o2zbay"/><path class="h2i-zfbvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-bag-01"} {...others} />);
}

export default Component;
