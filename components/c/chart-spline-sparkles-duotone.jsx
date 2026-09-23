import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ylvvsozxa.css';
import '../../css/i/i0e4rqb2u.css';
import '../../css/t/t2f0xziff.css';
import '../../css/x/x-s2jvb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ylvvsozxa"/><path class="i0e4rqb2u"/><path class="t2f0xziff"/><path class="x-s2jvb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-spline-sparkles-duotone"} {...others} />);
}

export default Component;
