import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p77rup82s.css';
import '../../css/t/t9h4wlbpo.css';
import '../../css/i/im78emblh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="p77rup82s"/><path class="t9h4wlbpo"/><path class="im78emblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:slightly-smiling-face-bold"} {...others} />);
}

export default Component;
