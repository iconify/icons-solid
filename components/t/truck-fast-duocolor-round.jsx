import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x-4jl74jc.css';
import '../../css/e/e8ltgdckf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x-4jl74jc"/><path class="e8ltgdckf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:truck-fast-duocolor-round"} {...others} />);
}

export default Component;
