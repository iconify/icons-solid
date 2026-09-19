import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee45ycbzu.css';
import '../../css/t/t0j7g2fur.css';
import '../../css/i/iqg45ybon.css';
import '../../css/t/ttm2n_87g.css';
import '../../css/c/cvyeblbsz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ee45ycbzu"/><path class="t0j7g2fur"/><path class="iqg45ybon"/><path class="ttm2n_87g"/><path clip-rule="evenodd" class="cvyeblbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:milky-way"} {...others} />);
}

export default Component;
