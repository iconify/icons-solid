import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_ef_mb_g.css';
import '../../css/a/arri0f45p.css';
import '../../css/l/loakd2kiv.css';
import '../../css/u/u593-9scx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="g_ef_mb_g"/><path class="arri0f45p"/><path class="loakd2kiv"/><path class="u593-9scx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-bump-duo"} {...others} />);
}

export default Component;
