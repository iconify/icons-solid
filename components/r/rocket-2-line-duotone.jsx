import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jrkvf3bcq.css';
import '../../css/k/kqt5nib3p.css';
import '../../css/c/ck_1iolbp.css';
import '../../css/r/rnifwvbbt.css';
import '../../css/k/klkfibbti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jrkvf3bcq"/><path class="kqt5nib3p"/><path class="ck_1iolbp"/><path class="rnifwvbbt"/><path class="klkfibbti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-2-line-duotone"} {...others} />);
}

export default Component;
