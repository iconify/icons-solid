import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ay6b69buz.css';
import '../../css/o/o_nxt9b0b.css';
import '../../css/p/pmf88gbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ay6b69buz"/><path class="o_nxt9b0b"/><path class="pmf88gbsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-output"} {...others} />);
}

export default Component;
