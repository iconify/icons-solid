import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7duswb0q.css';
import '../../css/g/g9862dbbu.css';
import '../../css/z/zxew78tvc.css';
import '../../css/r/rlshfrp2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y7duswb0q"/><path class="g9862dbbu"/><path class="zxew78tvc"/><path class="rlshfrp2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:rat-duotone"} {...others} />);
}

export default Component;
