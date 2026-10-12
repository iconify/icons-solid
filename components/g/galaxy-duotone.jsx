import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xlq-gib-u.css';
import '../../css/w/w504wxbjp.css';
import '../../css/r/r524x5b2b.css';
import '../../css/h/h6sxiq-ff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xlq-gib-u"/><path class="w504wxbjp"/><path class="r524x5b2b"/><path class="h6sxiq-ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:galaxy-duotone"} {...others} />);
}

export default Component;
