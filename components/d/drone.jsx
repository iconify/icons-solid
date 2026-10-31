import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bhdpo-bir.css';
import '../../css/t/tbg9rr_ic.css';
import '../../css/w/w-y10bb_r.css';
import '../../css/d/d9a7l4ftc.css';
import '../../css/j/j7yv1i66t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bhdpo-bir wm-shadow"/><path class="tbg9rr_ic wm-shadow"/><path class="w-y10bb_r"/><path class="d9a7l4ftc"/><path class="j7yv1i66t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:drone"} {...others} />);
}

export default Component;
