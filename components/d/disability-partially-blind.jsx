import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/urhsxtg1v.css';
import '../../css/t/tmwyrmbys.css';
import '../../css/q/qzydosbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="urhsxtg1v"/><path class="tmwyrmbys"/><path class="qzydosbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:disability-partially-blind"} {...others} />);
}

export default Component;
