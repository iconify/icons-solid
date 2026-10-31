import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uiqmlpp4f.css';
import '../../css/c/c8vxj1btj.css';
import '../../css/r/rdmdjgw4c.css';
import '../../css/x/x624b5wlo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uiqmlpp4f wm-shadow"/><path class="c8vxj1btj wm-shadow"/><path class="rdmdjgw4c"/><path class="x624b5wlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:octagon-alert"} {...others} />);
}

export default Component;
