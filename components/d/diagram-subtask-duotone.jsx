import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bciy_pr0x.css';
import '../../css/c/cql2_e1mc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bciy_pr0x"/><path class="cql2_e1mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:diagram-subtask-duotone"} {...others} />);
}

export default Component;
