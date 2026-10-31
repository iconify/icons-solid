import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g-egt5p9g.css';
import '../../css/q/qn_u12b2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g-egt5p9g"/><path class="qn_u12b2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-plus-duocolor-round"} {...others} />);
}

export default Component;
