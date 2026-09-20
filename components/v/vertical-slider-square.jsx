import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aitr86bjl.css';
import '../../css/u/udg19pjub.css';
import '../../css/k/kuyc_zbbi.css';
import '../../css/p/p0hwfacrn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aitr86bjl"/><path class="udg19pjub"/><path class="kuyc_zbbi"/><path class="p0hwfacrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:vertical-slider-square"} {...others} />);
}

export default Component;
