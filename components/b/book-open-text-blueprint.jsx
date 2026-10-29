import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/unhy7-bno.css';
import '../../css/h/hyqrsxcym.css';
import '../../css/n/nge5cfbll.css';
import '../../css/t/tyaz4rq9w.css';
import '../../css/x/xscq2rb7l.css';
import '../../css/p/pth9bvbqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="unhy7-bno wm-deco"/><path class="hyqrsxcym wm-deco"/><path class="nge5cfbll wm-deco"/><path class="tyaz4rq9w wm-k"/><path class="wm-a xscq2rb7l"/><path class="pth9bvbqd wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-open-text-blueprint"} {...others} />);
}

export default Component;
