import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp7upebym.css';
import '../../css/j/jn-m6eb8i.css';
import '../../css/m/mpta344_z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="xp7upebym"><path class="jn-m6eb8i"/><path class="mpta344_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ionic"} {...others} />);
}

export default Component;
