import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g-v1vzbnh.css';
import '../../css/w/wa_0u0vlg.css';
import '../../css/q/qp0a7ohls.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="g-v1vzbnh"/><path class="wa_0u0vlg"/><path class="qp0a7ohls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:electron"} {...others} />);
}

export default Component;
