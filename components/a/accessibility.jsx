import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t7oojcbpc.css';
import '../../css/c/cxhoxcc8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t7oojcbpc"/><path class="cxhoxcc8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:accessibility"} {...others} />);
}

export default Component;
