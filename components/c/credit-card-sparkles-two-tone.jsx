import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l8jiedbhu.css';
import '../../css/t/t-t_6zbvr.css';
import '../../css/l/l5-6ydbxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l8jiedbhu"/><path class="t-t_6zbvr"/><path class="l5-6ydbxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:credit-card-sparkles-two-tone"} {...others} />);
}

export default Component;
