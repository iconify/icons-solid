import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vupw44bws.css';
import '../../css/k/k_xnenbog.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="vupw44bws"/><path class="k_xnenbog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:battery-charging"} {...others} />);
}

export default Component;
