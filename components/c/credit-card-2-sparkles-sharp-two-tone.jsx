import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/w0d5lhbyf.css';
import '../../css/u/uecn1lb3p.css';
import '../../css/q/q3vaf6zlj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="w0d5lhbyf"/><path class="uecn1lb3p"/><path class="q3vaf6zlj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:credit-card-2-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
