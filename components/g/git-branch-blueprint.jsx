import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t4j37yb9a.css';
import '../../css/e/e1yc9ublt.css';
import '../../css/t/t218te2ox.css';
import '../../css/s/s2k53ac7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="t4j37yb9a wm-deco"/><path class="e1yc9ublt wm-deco"/><path class="t218te2ox wm-deco"/><path class="s2k53ac7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-branch-blueprint"} {...others} />);
}

export default Component;
