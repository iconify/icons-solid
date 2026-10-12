import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-hk8lb4a.css';
import '../../css/c/c2fl7fuew.css';
import '../../css/y/yz1489b0v.css';
import '../../css/m/mg3qx2mkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b-hk8lb4a"/><path class="c2fl7fuew"/><path class="yz1489b0v"/><path class="mg3qx2mkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:toothbrush-sparkles-duotone"} {...others} />);
}

export default Component;
