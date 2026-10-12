import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlxczzbqn.css';
import '../../css/z/zgj3unbvd.css';
import '../../css/t/tagg_7ocb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wlxczzbqn"/><path class="zgj3unbvd"/><path class="tagg_7ocb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:thumbs-up-duotone"} {...others} />);
}

export default Component;
