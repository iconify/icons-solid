import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bn7_f-byy.css';
import '../../css/i/i3xud4bxc.css';
import '../../css/w/w98c_y1_f.css';
import '../../css/y/ygkk5s74q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bn7_f-byy"/><path class="i3xud4bxc"/><path class="w98c_y1_f"/><path class="ygkk5s74q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:save-duotone"} {...others} />);
}

export default Component;
