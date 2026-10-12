import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f361_3bvh.css';
import '../../css/d/dsdw_xbyj.css';
import '../../css/i/iclwnvkbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f361_3bvh"/><path class="dsdw_xbyj"/><path class="iclwnvkbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sprout-duotone"} {...others} />);
}

export default Component;
