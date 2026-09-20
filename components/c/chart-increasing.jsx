import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi9mmib_a.css';
import '../../css/l/lji3cgbti.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kxjot_1jc.css';
import '../../css/a/ab8m_jbxj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zi9mmib_a"/><path class="lji3cgbti"/><g class="ij2x_72vy"><path class="kxjot_1jc"/><path class="ab8m_jbxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:chart-increasing"} {...others} />);
}

export default Component;
