import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktuzzdhyu.css';
import '../../css/w/wb6k-wbqf.css';
import '../../css/y/y0977abbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ktuzzdhyu"/><path class="wb6k-wbqf"/><path class="y0977abbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:package-2-duotone"} {...others} />);
}

export default Component;
