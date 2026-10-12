import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsfpps3-a.css';
import '../../css/j/jcl7bgvzi.css';
import '../../css/w/w1g0myb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tsfpps3-a"/><path class="jcl7bgvzi"/><path class="w1g0myb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-archive-duotone"} {...others} />);
}

export default Component;
