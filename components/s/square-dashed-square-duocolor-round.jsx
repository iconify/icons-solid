import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xzvom3b5z.css';
import '../../css/k/k47t5rb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xzvom3b5z"/><path class="k47t5rb9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-square-duocolor-round"} {...others} />);
}

export default Component;
