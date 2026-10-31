import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f19ze5brw.css';
import '../../css/c/cqb78j2rt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f19ze5brw"/><path class="cqb78j2rt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:brain-duocolor-round"} {...others} />);
}

export default Component;
