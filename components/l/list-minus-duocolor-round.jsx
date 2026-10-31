import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s1fz_26ri.css';
import '../../css/q/qn_u12b2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s1fz_26ri"/><path class="qn_u12b2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-minus-duocolor-round"} {...others} />);
}

export default Component;
