import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jj_5alors.css';
import '../../css/x/x7r6vrb4q.css';
import '../../css/c/cl4qfyg_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jj_5alors"/><path class="x7r6vrb4q"/><path class="cl4qfyg_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mails-duotone"} {...others} />);
}

export default Component;
