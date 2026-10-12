import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijmo84y7j.css';
import '../../css/u/uzmwkhbts.css';
import '../../css/z/zb2v6-b5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ijmo84y7j"/><path class="uzmwkhbts"/><path clip-rule="evenodd" class="zb2v6-b5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-cloud-duotone"} {...others} />);
}

export default Component;
