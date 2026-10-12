import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z51z6b_cv.css';
import '../../css/i/iym-rnbyp.css';
import '../../css/r/re7_rlvjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z51z6b_cv"/><path class="iym-rnbyp"/><path class="re7_rlvjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:message-square-check-duotone"} {...others} />);
}

export default Component;
