import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hm0z84mqz.css';
import '../../css/i/im-u2lvxf.css';
import '../../css/r/rzklukbol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hm0z84mqz"/><path class="im-u2lvxf"/><path class="rzklukbol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:globe-plus-duotone"} {...others} />);
}

export default Component;
