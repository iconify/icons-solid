import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2xz0_bat.css';
import '../../css/w/wbfa45b6c.css';
import '../../css/j/j-46o3b4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h2xz0_bat"/><path class="wbfa45b6c"/><path class="j-46o3b4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folders-duotone"} {...others} />);
}

export default Component;
