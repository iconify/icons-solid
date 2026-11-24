import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bogvh6bya.css';
import '../../css/u/uv6hq1b8i.css';
import '../../css/f/f8jdkubqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bogvh6bya"/><path clip-rule="evenodd" class="uv6hq1b8i"/><path class="f8jdkubqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cinema-duotone"} {...others} />);
}

export default Component;
