import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vyd0dvb_q.css';
import '../../css/q/qa_v1ibag.css';
import '../../css/t/tupr9im7d.css';
import '../../css/z/zdeqsb64h.css';
import '../../css/b/bexvdxbjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vyd0dvb_q"/><circle class="qa_v1ibag"/><path class="tupr9im7d"/><circle class="zdeqsb64h"/><path class="bexvdxbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scissors-line-dashed"} {...others} />);
}

export default Component;
