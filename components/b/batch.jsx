import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp7upebym.css';
import '../../css/k/kvn-2v0wt.css';
import '../../css/e/e7s-dwrnc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="xp7upebym"><path class="kvn-2v0wt"/><path class="e7s-dwrnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:batch"} {...others} />);
}

export default Component;
